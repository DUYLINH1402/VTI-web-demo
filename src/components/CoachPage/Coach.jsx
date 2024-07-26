import { CardCoach } from '../card/Card';
import './coach.scss';
import { CoachData } from './CoachData';

export const Coach = () => {
  return (
    <>
      <section className="coach">
        <div>
          <img
            id="coach-banners"
            src="https://vtiacademy.edu.vn/upload/images/z4713784540622-d89d9e87aac17b74a6457854f4b40f61.jpg"
            alt="Coach image"
          />
        </div>
        <div>
          <h1 id="title-coach">Huấn luyện viên</h1>
          <p className="parah-coach">
            Tại VTI Academy, 100% Mentor là chuyên gia trong ngành với kinh
            nghiệm từ 3 năm trở lên
          </p>
        </div>
        <div className="source-coach">
          
          {CoachData.map((item, index) => (
            <CardCoach item={item} id={index} />
          ))}
        </div>
      </section>
    </>
  );
};
