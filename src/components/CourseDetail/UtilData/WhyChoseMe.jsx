import './whyChoseMe.scss';
import { WhyChoseMeData } from './WhyChoseMeData';

export const WhyChoseMe = () => {
  return (
    <>
      <section className="box">
        <h1 className="title-why">Lý do lựa chọn chúng tôi?</h1>
        <div className="container-why">
          <div className="content">
            <div className="content-left">
              <div className="column">
                <span>
                  <img src={WhyChoseMeData.logo1} alt="Icon-1" />
                </span>
                <span>{WhyChoseMeData.col1}</span>
              </div>
              <div className="column">
                <span>
                  <img src={WhyChoseMeData.logo2} alt="Icon-2" />
                </span>
                <span>{WhyChoseMeData.col2}</span>
              </div>
              <div className="column">
                <span>
                  <img src={WhyChoseMeData.logo3} alt="Icon-3" />
                </span>
                <span>{WhyChoseMeData.col3}</span>
              </div>
              <div className="column">
                <span>
                  <img src={WhyChoseMeData.logo4} alt="Icon-4" />
                </span>
                <span>{WhyChoseMeData.col4}</span>
              </div>
              <div className="column">
                <span>
                  <img src={WhyChoseMeData.logo5} alt="Icon-5" />
                </span>
                <span>{WhyChoseMeData.col5}</span>
              </div>
              <div className="column-under">
                <div> </div>
              </div>
            </div>
          </div>
          <div>
            <img className="img-right" src={WhyChoseMeData.img} alt="Image" />
          </div>
        </div>
      </section>
    </>
  );
};
