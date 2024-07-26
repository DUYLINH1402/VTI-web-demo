import { CardPartner } from '../card/Card';
import { Footer } from '../Home/Footer';
import './partner.scss';
import { PartnerData } from './PartnerData.jsx';

export const Partner = (item) => {
  return (
    <>
      <section className="partner">
        <div className="partner-img">
          <img
            src="https://vtiacademy.edu.vn/upload/images/z4713784658821-4c16546b33eb182a2d3d75a923f3352f.jpg"
            alt="Partner image"
          />
        </div>
        <h1 id="title-partner">Đối tác của VTI</h1>
        <div className="partner-logo">
          <ul>
            {PartnerData.map((item) => (
              <li>
                <CardPartner item={item} key={item.id} />
              </li>
            ))}
          </ul>
        </div>
        <div></div>
      </section>
      <Footer />
    </>
  );
};
