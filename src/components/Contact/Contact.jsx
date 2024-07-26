import './contact.scss';
import { ContactData } from './ContactData';
import phone from '../../image/phone.svg';
import map from '../../image/map.svg';
import mail from '../../image/mail.svg';
import web from '../../image/web.svg';
import time from '../../image/time.svg';
import { Footer } from '../Home/Footer';

// LÀM THỦ CÔNG KHÔNG DÙNG .map SẼ DỄ NHẤT
export const Contact = () => {
  return (
    <>
      <article>
        <img
          className="contact-image"
          src="https://vtiacademy.edu.vn/upload/images/z4713878239792-99919e8d89a5e9025ab1498cd51cd747.jpg"
          alt="Contact-image"
        />
        <section>
          <div className="list">
            <ul className="container-contact">
              <h1 className="title-contact"> Các cơ sở VTI Academy</h1>
              <li>
                <p>
                  <img className="map" src={map} />
                  {/* target="_blank": Khi click vào liên kết sẽ mở Tab mới */}
                  {ContactData.address1}
                  <a target="_blank" href={ContactData.map1}>
                    {' '}
                    [Bản đồ]
                  </a>
                </p>
                <p className="phone">
                  <img src={phone} />
                  {ContactData.phone1}
                </p>
              </li>
              <li>
                <p>
                  <img className="map" src={map} />
                  {ContactData.address2}
                  <a target="_blank" href={ContactData.map2}>
                    {' '}
                    [Bản đồ]
                  </a>
                </p>
                <p className="phone">
                  <img src={phone} />
                  {ContactData.phone2}
                </p>
              </li>
              <li>
                <p>
                  <img className="map" src={map} />
                  {ContactData.address3}
                  <a target="_blank" href={ContactData.map3}>
                    {' '}
                    [Bản đồ]
                  </a>
                </p>
                <p className="phone">
                  <img src={phone} />
                  {ContactData.phone3}
                </p>
              </li>
              <li>
                <p>
                  <img className="map" src={map} />
                  {ContactData.address4}
                  <a target="_blank" href={ContactData.map4}>
                    {' '}
                    [Bản đồ]
                  </a>
                </p>
                <p className="phone">
                  <img src={phone} />
                  {ContactData.phone4}
                </p>
              </li>
              <li>
                <p>
                  <img className="map" src={map} />
                  {ContactData.address5}
                  <a target="_blank" href={ContactData.map5}>
                    {' '}
                    [Bản đồ]
                  </a>
                </p>
                <p className="phone">
                  <img src={phone} />
                  {ContactData.phone5}
                </p>
              </li>
              <li>
                <p>
                  <img className="map" src={map} />
                  {ContactData.address6}
                  <a target="_blank" href={ContactData.map6}>
                    {' '}
                    [Bản đồ]
                  </a>
                </p>
                <p className="phone">
                  <img src={phone} />
                  {ContactData.phone6}
                </p>
              </li>
              <li>
                <p>
                  <img className="map" src={map} />
                  {ContactData.address7}
                  <a target="_blank" href={ContactData.map7}>
                    {' '}
                    [Bản đồ]
                  </a>
                </p>
                <p className="phone">
                  <img src={phone} />
                  {ContactData.phone2}
                </p>
              </li>
              <p>
                <img id="mail" src={mail} />
                Email: info@vtiacademy.edu.vn
              </p>
              <p>
                <img id="web" src={web} />
                Website: vtiacademy.edu.vn
              </p>

              <p>
                <img id="time" src={time} />
                Giờ làm việc: 8:00 - 17:30
              </p>
            </ul>
            <section className="google-map">
              {/* Nhúng bản đồ vào */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d14897.620597701549!2d105.83521400000001!3d21.016469!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1721041360448!5m2!1sen!2sus"
                width="500"
                height="350"
              ></iframe>
            </section>
          </div>
        </section>
      </article>
      <section>
        <Footer />
      </section>
    </>
  );
};
