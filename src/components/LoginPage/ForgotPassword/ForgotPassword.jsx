import './forgotPassword.scss';
import arrow from './../../../image/arrow.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { app } from './../../../firebase';

import { getAuth, sendPasswordResetEmail } from "firebase/auth";
export const ForgotPassword = () => {
  const navigate = useNavigate();

    const auth = getAuth();
    const [email, setEmail] = useState();
    const ResetPassword = () => {
        const infoLogin = {
            email,
        };
        sendPasswordResetEmail(auth, infoLogin.email)
            .then(() => {
                // Password reset email sent!
                navigate('/login');
                alert('Kiểm tra email để tiến hành cập nhật mật khẩu')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert('Đã xảy ra lỗi')
            });
    }
    return (
        <>
            <section className='container-forgot'>
                <div className="wrapper">

                    <div className="forgot">
                        <h2>Đổi mật khẩu</h2>
                        <input
                            id='email'
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}/>
                        <button
                            onClick={() => ResetPassword()}
                            id='submit'
                            type="submit">
                            Cập nhật
                        </button>
                    </div>
                    <div className='back'>
                        <Link to='/login'>
                            <img
                                id='arrow-img'
                                src={arrow}
                                alt="arrow-img" />
                            Quay lại
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}