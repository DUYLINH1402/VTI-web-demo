import './footer.scss';
import facebookIcon from './../../image/facebookIcon.svg';
import tiktokIcon from './../../image/tiktokIcon.svg';
import youtubeIcon from './../../image/youtubeIcon.svg';
import map from './../../image/map.svg';
import phone from './../../image/phone.svg';
export const Footer = () => {
  return (
    <>
      <div className="footer">
        <ul className="column-1">
          <h3>Cơ sở Hà Nội</h3>
          <li>
            <p>
              <img
                className="map"
                src={map} />
              CS Hoàng Cầu: T7, 235 Hoàng Cầu Mới,
              Đống Đa, Hà Nội
            </p>
          </li>
          <li>
            <p>
              <img
                className="phone"
                src={phone} />
              Hotline: 0865.359.388
            </p>
          </li>
          <p>
            <img
              className="map"
              src={map} />
            CS Duy Tân: T6, Toà nhà AC, 78 Duy Tân,
            Cầu Giấy, Hà Nội
          </p>
          <li>
            <p>
              <img
                className="phone"
                src={phone} />
              Hotline: 0866.805.563
            </p>
          </li>
        </ul>
        <ul className="column-2">
          <h3>Cơ sở Đà Nẵng</h3>
          <p>
            <img
              className="map"
              src={map} />
            CS Đà Nẵng: Tầng 2 Tòa nhà Cường Thịnh,
            số 278 Đường 2-9, Hải Châu, Đà Nẵng
          </p>
          <li>
            <p>
              <img
                className="phone"
                src={phone} />
              Hotline: 0968.834.386
            </p>
          </li>
        </ul>
        <ul className="column-3">
          <h3>Cơ sở Hồ Chí Minh</h3>
          <p>
            <img
              className="map"
              src={map} />
            CS HCM : Phúc Quý Building,
            164 Nguyễn Văn Thương, Bình Thạnh, Hồ Chí Minh
          </p>
          <li>
            <p>
              <img
                className="phone"
                src={phone} />
              Hotline: 0978.067.066
            </p>
          </li>
          <p>
            <img
              className="map"
              src={map} />
            CS HCM : T7, VNO Building, 124 Điện Biên Phủ,
            Quận 1, Hồ Chí Minh
          </p>
          <li>
            <p>
              <img
                className="phone"
                src={phone} />
              Hotline: 0978.067.066
            </p>
          </li>
        </ul>
        <ul className="column-4">
          <h3>Kết nối</h3>
          <div>
            <pan>
              <a href="#">
                <img src={tiktokIcon} alt="TikTok icon" />
              </a>
            </pan>
            <pan>
              <a href="#">
                <img src={facebookIcon} alt="Facabook icon" />
              </a>
            </pan>
            <pan>
              <a href="#">
                <img src={youtubeIcon} alt="YouTube icon" />
              </a>
            </pan>
          </div>
        </ul>
      </div>
      <div className="Copyright">
        <p>Copyright © 2024 VTI ACADEMY</p>
      </div>
    </>
  );
};
