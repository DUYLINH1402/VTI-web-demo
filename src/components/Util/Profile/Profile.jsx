import './profile.scss'
import document from './../../../image/document.svg';
import setting from './../../../image/setting.svg';
import signout from './../../../image/signout.svg';
import { getAuth, signOut } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import { app } from '../../../firebase';
import user from './../../../image/user.svg';

export const Profile = () => {
    // if exit authen ...
    const navigate = useNavigate();
    const auth = getAuth(app);
    const onLogOutPage = () => {
        localStorage.clear(); // delete token from localstorage
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate('/login');
        }).catch((error) => {
            alert(error)
        });
    }
    return (
        <>
            <section className='container-profile'>
                <ul className='container-list'>
                    <li className='list-profile'>
                        <Link to="/Profile"
                            className='content-profile'
                        > <span>
                                <img
                                    className='icon-profile'
                                    src={user}
                                    alt="" />
                            </span>Trang cá nhân
                        </Link>
                    </li>
                    <li className='list-profile'>
                        <Link to="/MyCourse"
                            className='content-profile'
                        ><span>
                                <img
                                    className='icon-profile'
                                    src={document}
                                    alt="" />
                            </span>Quản lý khóa học
                        </Link>
                    </li>
                    <li className='list-profile'>
                        <Link to="/Setting"
                            className='content-profile'
                        ><span>
                                <img
                                    className='icon-profile'
                                    src={setting}
                                    alt="" />
                            </span>Tùy chỉnh
                        </Link>
                    </li>
                    <li className='list-profile'>
                        <Link to="#"
                            className='content-profile'
                            onClick={onLogOutPage} ><span>
                                <img
                                    className='icon-profile'
                                    src={signout}
                                    alt="" />
                            </span>Đăng xuất
                        </Link>
                    </li>
                </ul>
            </section>
        </>
    )
}