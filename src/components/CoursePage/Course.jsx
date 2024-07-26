import './course.scss';
import { CourseData } from './CourseData.jsx';
import { Footer } from '../Home/Footer';
import { Card } from '../card/Card';
// import { Pagination } from 'antd';
export const Course = () => {
  return (
    <>
      <article>
        <div>
          <img
            className="course-img"
            src="https://vtiacademy.edu.vn/upload/images/z4713894473283-471e4cfa8d475a3f09f9d97e4d22aa18.jpg"
            alt="Course image"
          />
        </div>
        <h1 id="title-course">CÁC KHÓA HỌC</h1>
        {/* Phần Car k cần return cũng có thể load được */}
        <div className="course">
          {CourseData.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      </article>
      <Footer />
    </>
  );
};
