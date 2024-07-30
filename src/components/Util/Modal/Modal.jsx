import './modal.scss';
import { useRef, useState } from 'react';
import { Modal, Input, message } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import axios from 'axios';
import { APIEndPoin } from '../API';
// import { ShowMessageErr } from '../ShowMessageErr/ShowMessageErr';

export const InputInfo = () => {
  // Show Modal
  const showModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  //  Close Modal
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  // sử dụng useRef để tối ưu hóa khi nhập dữ liệu vào Form Modal
  // Để không render lại web trong quá trình nhập liệu
  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const addressRef = useRef(null);
  const courseRef = useRef(null);
  const [err, listError] = useState(null);

  const handleOk = () => {
    // Khi có lỗi nhập liệu, mở debugger lên để kiểm tra luồng chạy
    // debugger;
    const obj = {
      // Vì dùng thẻ input để nhận dữ liệu nên cần .input.value
      fullName: fullNameRef.current.input.value,
      email: emailRef.current.input.value,
      phoneNumber: phoneNumberRef.current.input.value,
      address: addressRef.current.input.value,
      // CHÚ Ý: Vì dùng thẻ textArea để nhận dữ liệu nên cần resizableTextArea.textArea.value.
      course: courseRef.current.resizableTextArea.textArea.value,
    };

    // VALIDATE MODAL
    // Nếu input vào rỗng thì trả về thông báo lỗi
    // ngược lại không trả gì cả
    if ((fullNameRef.current.input.value).trim() == '' ||
      (phoneNumberRef.current.input.value).trim() == '') {
      listError({ message: 'Vui lòng nhập thông tin' });
      return;
    } else {
      listError(null);
    }

    console.log('obj: ', obj);
    // Call API POST
    axios
      // Truyền obj vào method POST và truyền đúng URL
      .post(APIEndPoin + 'advise_info', obj)
      .then((response) => {

        handleCancel();
        // alert Có thể phát triển thành Modal sẽ OK hơn
        alert('Gửi thông tin thành công!');
      })
      .catch((err) => {
        alert('Đã xảy ra lỗi!', err);
      });
    console.log(err, 'list err');
  };
  // debugger;
  return (
    <>
      <article>
        <section className="modal-advise">
          <a href="#" className="advise">
            <img
              // Khi click vào ảnh sẽ gọi hàm show Modal
              onClick={() => showModal()}
              src="https://vtiacademy.edu.vn/upload/images/anh-link/nhan-tu-van-02-copy.png"
              alt="Not founf image"
            />
          </a>
          <Modal
            // CHÚ Ý: KHÔNG THỂ ĐẶT className cho Modal của Ant Design được. Vì nó có className riêng
            title="Đăng ký tư vấn cùng đội ngũ chuyên gia VTI ACADEMY!!"
            open={isModalOpen}
            // Tạo nút Ok trong Modal
            onOk={handleOk}
            // Tạo nút Cancel trong Modal
            onCancel={handleCancel}
          >

            <div className="input-info">
              <Input
                // className="form-input fullname "
                name="fullName"
                ref={fullNameRef}
                // status={err?.fullName ? 'error' : 'seccess'}
                placeholder="Họ và tên *"
              />
              {err ? <span className="reuqired" >  {err?.message}</span> : null}
              <Input
                // className="form-input email"
                name="email"
                ref={emailRef}
                // status={email ? 'success' : 'error'}
                placeholder="Địa chỉ email"
              />
              <Input
                // className="form-input phoneNumber"
                name="phoneNumber"
                ref={phoneNumberRef}
                // status={phoneNumber ? 'success' : 'error'}
                placeholder="Số điện thoại *"
              />
               {err ? <span className="reuqired" >  {err?.message}</span> : null}
              <Input
                // className="form-input address"
                name="address"
                ref={addressRef}
                // status={address ? 'success' : 'error'}
                placeholder="Địa điểm"
              />
              <TextArea
                // className="form-input course"
                name="course"
                ref={courseRef}
                // status={course ? 'success' : 'error'}
                placeholder="Khóa học quan tâm"
              />
            </div>
          </Modal>
        </section>
      </article>
    </>
  );
};
