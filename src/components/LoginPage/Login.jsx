import './login.scss';
import { Footer } from '../Home/Footer';
import google from './../../image/google.svg'
import facebook from './../../image/facebook.svg'
import { Link, useNavigate } from 'react-router-dom';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider
}
    from "firebase/auth";
import { app } from './../../firebase';
export const Login = () => {
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
                // ...
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

    return (
        <>
            <section className='container-login'>
                <div className="wrapper">
                    <p className='line line-1'></p>
                    <p className='line line-2'></p>
                    <p className='line line-3'></p>
                    <div className="login">
                        <h2>Login</h2>
                        <input id='username' type="text" placeholder="Tên đăng nhập" />
                        <input id='password' type="password" placeholder="Mật khẩu" />
                        <input id='submit' type="submit" value="Đăng nhập" />
                        <div className="links">
                            <Link id='forget' to="#">Forget Password</Link>
                            <Link id='signup' to="/rigister"
                            >Signup</Link>
                        </div>
                        <p className='login-other-title'>Hoặc đăng nhập bằng</p>
                        <div className='login-other'>
                            <a onClick={() => loginGoole()}
                             className='login-with'
                                href='#'>
                                <img src={google} alt="google" 
                                 />Google</a>
                            {/* <a className='login-with'
                                href='#'>
                                <img src={facebook} alt="facebook" />Facebook</a> */}

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

