import './rigisterForm.scss';
import { useRef, useState } from 'react';
import { Input } from 'antd';
import { APIEndPoin } from './../../Util/API';
import {  useNavigate } from 'react-router-dom';


import axios from 'axios';
export const RigisterForm = () => {
  // Đối tượng Validator
  const [inputElement, setInputElement] = useState(false);
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
    form: '#rigister-form',
    errorSelector: '.error-message',
    rules: [
      // #fullname và #email là 2 đối số (selector) đc nhận vào từ function
      Validator.isRequired('#fullname'),
      Validator.isEmai('#email'),
      Validator.minLength('#password', 6),
    ],
  });
  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmationRef = useRef(null);

  const handleSubmit = () => {
    const obj = {
      // Vì dùng thẻ input để nhận dữ liệu nên cần .input.value
      fullName: fullNameRef.current.input.value,
      email: emailRef.current.input.value,
      password: passwordRef.current.input.value,
      passwordConfirmation: passwordConfirmationRef.current.input.value,
    };
    // debugger;
    // console.log('obj: ', obj);
    axios
      // Truyền obj vào method POST và truyền đúng URL
      .post(APIEndPoin + 'user', obj)
      .then((response) => {
        alert('Đăng ký thành công!');
        navigate('/login');
      })
      .catch(() => {
        alert('Đã xảy ra lỗi!');
      });
  };
  return (
    <>
      <div className="rigister-form">
        <form action="#" className="form" id="rigister-form">
          <h3 className="title">Đăng ký thành viên</h3>

          <div className="input-group ">
            <label className="label">Họ và tên</label>
            <Input
              // value={error}
              onBlur={(e) => setInputElement(e.target.value)}
              name='fullname'
              ref={fullNameRef}
              type="text"
              id="fullname"
              className="input"
              placeholder="VD: Nguyễn Duy Linh"
            />
            <span className="error-message invalid"></span>
          </div>
          <div className="input-group ">
            <label className="label">Email</label>
            <Input
              onBlur={(e) => setInputElement(e.target.value)}
              name='email'
              ref={emailRef}
              type="text"
              id="email"
              className="input"
              placeholder="abc@gmail.com"
            />
            <span className="error-message invalid"></span>
          </div>
          <div className="input-group ">
            <label className="label">Mật khẩu</label>
            <Input
              onBlur={(e) => setInputElement(e.target.value)}
              name='password'
              ref={passwordRef}
              type="password"
              id="password"
              className="input"
            />
            <span className="error-message invalid"></span>
          </div>
          <div className="input-group ">
            <label className="label">Nhập lại mật khẩu</label>
            <Input
              onBlur={(e) => setInputElement(e.target.value)}
              name='passwordConfirmation'
              ref={passwordConfirmationRef}
              type="password"
              id="password-confirmation"
              className="input"
            />
            <span className="error-message invalid"></span>
          </div>
          <button className="button" type="submit"
            onClick={handleSubmit}>
            Đăng ký
          </button>
        </form>
      </div>
    </>
  );
};