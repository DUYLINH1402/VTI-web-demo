import { SourceContentPage } from '../SourceContentPage/SourceContentPage';
import './content.scss';
import { Footer } from './Footer';

export const Content = () => {
  return (
    <>
      <article>
        <div className="content">
          <img
            id="img-content-1"
            src="https://vtiacademy.edu.vn/upload/images/z4670903336619-10cc183d2e4cff8879a8e72511a54c8a.jpg"
            alt=""
          />
          <img
            id="img-content-2"
            src="https://vtiacademy.edu.vn/upload/images/2048-x-1418(1).jpg"
            alt=""
          />
        </div>
        <div></div>
        <h1 id="title-cource">Các khóa đào tạo</h1>
      </article>
      <SourceContentPage />
      <Footer />
    </>
  );
};
