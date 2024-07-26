import './header.scss';
import { Outlet, Link } from 'react-router-dom';
import { InputInfo } from '../Modal/Modal';

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
  { name: 'Group', id: 'group', src: 'group' },
];

// Tạo export cấp cho Home.jsx sử dụng
export const Header = () => {
  return (
    <>
      <article>
        <section className="header" id="header">
          {/* Hiển thị incon tư vấn và Modal */}
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
            <Link to="/">
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
                <li>
                  {/* Dùng thẻ link thay thẻ <a>
                Để khi click vào liên kết sẽ k load lại trang.
                Chú ý: to=href */}
                  <Link to={item.src} key={index}>
                    {item.name}
                  </Link>
                </li>
              ))}
              {/* <div className="search-icon">
              <img src={search} height="40" width="40" />
            </div> */}
            </ul>
          </div>
        </section>
        <div id="detail">
          {/* Outlet sẽ hiển thị ra children bên phần routerHome*/}
          <Outlet />
        </div>
      </article>
    </>
  );
};
