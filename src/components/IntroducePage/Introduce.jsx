import { Footer } from '../Home/Footer';
import './introduce.scss';
import {
  Row1Content,
  Row2Content,
  Row3Content,
  Row4Content,
  Row5Content,
} from './IntroduceSource';

export const Introduce = () => {
  return (
    <>
      <article className="introduce">
        <div className="introduce-img">
          <img
            src="https://vtiacademy.edu.vn/upload/images/z4713894469438-2a9d5f969b98fc206d911bea3ae324c0.jpg"
            alt="Not found image"
          />
        </div>
        <section className="row-1">
          <img src="https://vtiacademy.edu.vn/upload/images/ve-chung-toi/bg-gioithieu.png" />
          <h1 id="title-introduce">Giới thiệu chung về</h1>
          <p>VTI Academy</p>
          <div className="row-1-content">
            <p>{Row1Content.content}</p>
          </div>
        </section>
        <section className="row-2">
          <div>
            <img
              src="https://vtiacademy.edu.vn/upload/images/gioi-thieu/149366131-2914002822253322-6084218597631765228-o.jpg"
              alt="Not Found Image"
            />
          </div>
          <div className="stt-content">
            <article></article>
            <div>1</div>
          </div>
          <div className="row-2-content">
            <h2>Tầm nhìn</h2>
            <p>{Row2Content.content}</p>
          </div>
        </section>
        <section className="row-3">
          <div className="row-3-content">
            <h2>Sứ mệnh</h2>
            <p>{Row3Content.content}</p>
          </div>
          <div className="stt-content">
            <article></article>
            <div>2</div>
          </div>
          <div>
            <img
              src="https://vtiacademy.edu.vn/upload/images/278996189-733602468010156-1412391785179953791-n.jpg"
              alt="Not Found Image"
            />
          </div>
        </section>
        <section className="row-4">
          <div>
            <img
              src="https://vtiacademy.edu.vn/upload/images/ve-vti-education-100.jpg"
              alt="Not Found Image"
            />
          </div>
          <div className="stt-content">
            <article></article>
            <div>3</div>
          </div>
          <div className="row-4-content">
            <h2>Cam kết</h2>
            <p>{Row4Content.content}</p>
          </div>
        </section>
        <section className="row-5">
          <div className="row-5-content">
            {/* <h2>Sứ mệnh</h2> */}
            <p>{Row5Content.content}</p>
          </div>
          <div className="stt-content">
            <article></article>
            <div>...</div>
          </div>
          <div>
            <img src="https://vtieducation.vn/upload/images/tin-tuc/su-kien/1.jpg" />
          </div>
        </section>
      </article>
      <Footer />
    </>
  );
};
