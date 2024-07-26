import { Footer } from '../Home/Footer.jsx';
import { TrainingData } from './TrainingData.jsx';
import './training.scss';

export const Training = () => {
  return (
    <>
      <section className="training">
        <img
          src="https://vtiacademy.edu.vn/upload/images/z4713848657337-98506428dd33a2aaca9515ed2a359721.jpg"
          alt="Training image"
        />
        <div>
          <h1 id="title-training">Đào tạo doanh nghiệp</h1>
          <h4>CHUYÊN NGHIỆP – TIN CẬY – TỐC ĐỘ</h4>
          <p>{TrainingData.Para1}</p>
          <h4>Đào tạo nguồn lực lập trình viên mới</h4>
          <p>{TrainingData.Para2}</p>
          <h4>Chương trình đào tạo chuyên sâu</h4>
          <p>{TrainingData.Para3}</p>
          <h4>Phương pháp đào tạo tiên tiến nhất</h4>
          <p>{TrainingData.Para1}</p>
          <div>
            <br />
            <br />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
