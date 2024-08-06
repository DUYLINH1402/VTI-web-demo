import './login.scss';
import google from './../../image/google.svg'
import facebook from './../../image/facebook.svg'
import { Link, useNavigate } from 'react-router-dom';

import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signInWithEmailAndPassword
}
    from "firebase/auth";
import { app } from './../../firebase';
import { useState } from 'react';
export const Login = () => {
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();
    // CODE LOGIN WITH GOOGLE MẪU
    const navigate = useNavigate();
    // auth lấy từ app và app lấy từ firebase.js đã lưu khi chạy project trên firebase
    // phải export app ra mới dùng được
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    const loginGoole = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                localStorage.setItem('token', user.accessToken);

                // navigate to home page
                navigate('/');
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('errror', errorMessage);
                // The email of the user's account used.
                //const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }
    const setLoginWithUser = () => {
        const infoLogin = {
            userName,
            password
        };
        signInWithEmailAndPassword(auth, infoLogin.userName, infoLogin.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                localStorage.setItem('token', user.accessToken);
                navigate('/');
                // console.log('user: ',user);

            })
            .catch((error) => {
                // Mở Console lên xem lỗi và tự edit
                if (error.message = 'INVALID_LOGIN_CREDENTIALS') {
                    alert('Thông tin đăng nhập không hợp lệ')
                }
                const errorCode = error.code;
                const errorMessage = error.message;

            });

    }
    return (
        <>
            <section className='container-login'>
                <div className="wrapper">
                    <div className="login">
                        <h2>VTI Academy</h2>
                        <input
                            id='username'
                            type="email"
                            placeholder="Tên đăng nhập"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)} />
                        <input
                            id='password'
                            type="password"
                            placeholder="Mật khẩu"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                        <button
                            id='submit'
                            type="submit"
                            onClick={() => setLoginWithUser()}
                        >Đăng nhập</button>
                        <div className="links">
                            <Link id='forget' to="#">Quên mật khẩu?</Link>
                            <Link id='sign-up' to="/rigister"
                            >Đăng ký</Link>
                        </div>
                        <p className='login-other-title'>Hoặc đăng nhập bằng</p>
                        <div className='login-other'>
                            <a onClick={() => loginGoole()}
                                className='login-with'
                                href='#'>
                                <img src={google} alt="google"
                                />Google</a>
                            <a className='login-with'
                                id='login-with-facebook'
                                href='#'>
                                <img src={facebook} alt="facebook" />Facebook</a>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

