import './content.scss';
import { Footer } from './Footer';
import { CarouselHome } from './HomeContent/CarouselHome';
import { CourseHome } from './HomeContent/CourseHome';

export const Content = () => {
  return (
    <>
      <article>
        <CarouselHome />
        <div className="content-home">
          <img
            id="img-content"
            src="https://vtiacademy.edu.vn/upload/images/2048-x-1418(1).jpg"
            alt="img-content"
          />
        </div>
      </article>
        <h1 id="title-cource">Các khóa đào tạo</h1>
      <CourseHome />
      <Footer />
    </>
  );
};
