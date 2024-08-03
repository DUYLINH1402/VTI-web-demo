import './header.scss';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { InputInfo } from '../Util/Modal/Modal';
import user from './../../image/user.svg';
import { Profile } from '../Util/Profile/Profile';
// Tạo thuộc tính tốc ký (Có thể tách ra Component riêng)
const MenuHeader = [
  { name: 'Trang chủ', id: 'home', src: '' },
  { name: 'Giới thiệu', id: 'introduce', src: 'introduce' },
  { name: 'Khóa học', id: 'course', src: 'course' },
  { name: 'Đào tạo', id: 'train', src: 'train' },
  { name: 'Đối tác', id: 'partner', src: 'partner' },
  { name: 'Học viên', id: 'student', src: 'student' },
  { name: 'Chuyên gia', id: 'coach', src: 'coach' },
  { name: 'Liên hệ', id: 'contact', src: 'contact' },
  { name: 'Blog', id: 'blog', src: 'blog' },

];

export const Header = () => {
  const [showProfile, setShowProfile] = useState(false)
  // if exit authen ...
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  // const auth = getAuth(app);

  useEffect(() => {
    if (!token) { // check if token return false
      navigate('/login'); // Điều hướng về trang Login
    }
  }, token);

  return (
    <>
      <article>
        <section className="header" id="header">
          <a href="#header">
            <img
              className="back-top"
              src="https://vtiacademy.edu.vn/template/frontend/images/top.png"
              alt="back to top"
            />
          </a>

          <InputInfo />
          <div className="info-designer">
            Design By <br /> NGUYEN DUY LINH <br /> VTI - Railway 83
          </div>
          <div className="header-logo">
            <Link to="">
              <img
                src="https://vtiacademy.edu.vn/upload/images/academy-02-01-01-01.png"
                alt="logo"
                width="180"
                height="40"
              />
            </Link>
          </div>
          <div className="header-right">
            <ul>
              {MenuHeader.map((item, index) => (
                <li key={index}>
                  {/* Dùng thẻ link thay thẻ <a>
                Để khi click vào liên kết sẽ k load lại trang.
                Chú ý: to=href */}
                  <Link to={item.src} >
                    {item.name}
                  </Link>
                </li>
              ))}

            </ul>
          </div>
          {/* Tạo Mounted và Unmounted */}
          <img

            className='header-profile'
            src={user}
            alt="user-icon"

            onClick={() => setShowProfile(!showProfile)} />
          {showProfile && <Profile />}
        </section>
        <div id="detail">
          {/* Outlet sẽ hiển thị ra children bên phần routerHome*/}
          <Outlet />
        </div>
      </article>
    </>
  );
};
