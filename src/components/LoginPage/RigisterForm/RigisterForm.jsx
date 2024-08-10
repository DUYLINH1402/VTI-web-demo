import './rigisterForm.scss';
import { useState } from 'react';
import arrow from './../../../image/arrow.svg';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from './../../../firebase';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';


// import axios from 'axios';
export const RigisterForm = () => {
  const navigate = useNavigate();
  function Validator(options) {
    // HÀM THỰC HIỆN VALIDATE
    function Validate(inputElement, rule) {
      // Đứng từ inputElement lấy ra thẻ cha của nó sau đó lại chọc vào trong thẻ chứa class error-message
      let errorElement = inputElement.parentElement.querySelector(
        options.errorSelector
      );
      // value: inputElement.value
      // test func: rule.test
      // errorMesage sẽ nhận dữ value từ Client và kiểm tra sau đó trả về kết quả được định nghĩa trong hàm test()
      var errorMesage = rule.test(inputElement.value);
      // Nếu có lỗi sẽ thêm lỗi bằng innerText
      if (errorElement) {
        errorElement.innerText = errorMesage;
      } else {
        errorElement.innerText = '';
      }
    }
    // Lấy element của form cần validate
    let formElement = document.querySelector(options.form);
    if (formElement) {
      options.rules.forEach(function (rule) {
        let inputElement = formElement.querySelector(rule.selector);
        if (inputElement) {
          // Xử lý trường hợp blur khỏi inputElement
          inputElement.onblur = function () {
            Validate(inputElement, rule);
          };
          // Xử lý trường hợp mỗi khi người dùng nhập vào inputElement
          inputElement.oninput = function () {
            let errorElement = inputElement.parentElement.querySelector(
              options.errorSelector
            );
            errorElement.innerText = '';
          };
        }
      });
    }
  }
  // Định nghĩa các rules
  // Nguyên tắc của các rules:
  // 1. Khi có lỗi => trả ra message lỗi
  // 2. Khi hợp lệ => trả về undefined
  Validator.isRequired = function (selector) {
    return {
      selector: selector,
      // Sẽ viết hàm kiểm tra người dùng đã nhập hay chưa tại đây
      test: function (value) {
        return value.trim() ? null : 'Vui lòng nhập họ và tên';
      },
    };
  };
  Validator.isEmai = function (selector) {
    return {
      selector: selector,
      // Sẽ viết hàm kiểm tra có phải là Email hay không tại đây
      test: function (value) {
        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return regex.test(value) ? null : 'Email không đúng định dạng';
      },
    };
  };
  Validator.minLength = function (selector, min) {
    return {
      selector: selector,
      // Sẽ viết hàm kiểm tra độ dài ký tự
      test: function (value) {
        return value.length >= min
          ? null
          : `Mật khẩu phải lớn hơn ${min} ký tự`;
      },
    };
  };
  Validator({
    // rigister-form là Form hiện tại đang Validator
    // Có thể áp dụng Validator này cho các form khác nếu trong
    // page có nhiều form
    form: 'rigister-form',
    errorSelector: '.error-message',
    rules: [
      // #fullname và #email là 2 đối số (selector) đc nhận vào từ function
      Validator.isRequired('#fullname'),
      Validator.isEmai('#email'),
      Validator.minLength('#password', 6),
    ],
  });
  const auth = getAuth(app);
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  // const [passwordConfirmation, setPasswordConfirmation] = useState();
  const createUser = () => {
    const infoLogin = {
      email,
      password,
    };
    createUserWithEmailAndPassword(
      auth,
      infoLogin.email,
      infoLogin.password,
    )
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log('user: ', user);

        navigate('/login');
        alert('Đăng ký tài khoản thành công');
        // Nếu tạo User thành công sẽ quay về trang Login
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('Đăng ký tài khoản không thành công!')
        console.log(errorMessage);
      });
  }
  return (
    <>
      <div className="rigister-form">
        <div className='back'>
          <Link to='/login'>
            <img
              id='arrow-img'
              src={arrow}
              alt="arrow-img" />
            Quay lại
          </Link>
        </div>
        <form className="form" id="rigister-form">
          <h3 className="title">Đăng ký thành viên</h3>

          <div className="input-group ">
            <label className="label">Họ và tên</label>
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              id="fullname"
              className="input"
              placeholder="VD: Nguyễn Duy Linh"
            />
            <span className="error-message invalid"></span>
          </div>
          <div className="input-group ">
            <label className="label">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              id="email"
              className="input"
              placeholder="abc@gmail.com"
            />
            <span className="error-message invalid"></span>
          </div>
          <div className="input-group ">
            <label className="label">Mật khẩu</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="input"
              id='password'

            />
            <span className="error-message invalid"></span>
            {/* <EyeOutlined /><EyeInvisibleOutlined /> */}
          </div>
          {/* <div className="input-group ">
            <label className="label">Nhập lại mật khẩu</label>
            <input
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              type="password"
              className="input"
            />
            <span className="error-message invalid"></span>
          </div> */}
          <button className="button"
            type='button'
            onClick={() => createUser()}>
            Đăng ký
          </button>

        </form>
      </div>
    </>
  );
};