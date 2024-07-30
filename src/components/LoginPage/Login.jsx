import './login.scss';
import { Footer } from '../Home/Footer';
import google from './../../image/google.svg'
import facebook from './../../image/facebook.svg'
import { Link } from 'react-router-dom';
export const Login = () => {

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
                            <a className='login-with'
                            href='#'>
                                <img src={google} alt="google" />Google</a>
                            <a className='login-with'
                            href='#'>
                                <img src={facebook} alt="facebook" />Facebook</a>

                        </div>
                    </div>
                </div>
            </section>
            <section>
                <Footer />
            </section>
        </>
    )
}

