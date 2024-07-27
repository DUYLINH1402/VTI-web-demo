import { CardStudent } from '../card/Card';
import { Footer } from '../Home/Footer';
import './student.scss';
import { StudentData } from './StudentData';

export const Student = () => {
  return (
    <>
      <section className="container-student">
        <div>
          <img
            id="student-banners"
            src="https://vtiacademy.edu.vn/upload/images/banner-home/banner-tuyen-sinh-100.jpg"
            alt="Student image"
          />
        </div>
        {/* <div>
          Hoc vien noi gi ve chung toi
        </div> */}
        <h1 className="title-student">Cựu học viên VTI Academy</h1>
        <div className="source-student">
          {StudentData.map((item, index) => (
            <CardStudent item={item} id={index} />
          ))}
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
};
