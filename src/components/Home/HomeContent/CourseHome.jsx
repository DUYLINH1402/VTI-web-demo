import { CardContent } from '../../card/Card';
import { CourseData } from '../../CoursePage/CourseData';
import './courseHome.scss';

export const CourseHome = () => {
  return (
    <section className="source-content-page">
      <div id="infinite" className="slider">
        <div className="container inte-brnd">
          <ul>
            <li className="card-content">
              {CourseData.map((item) => (
                <CardContent item={item} key={item.id} />
              ))}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
