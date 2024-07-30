import { Link, NavLink } from 'react-router-dom';
import './card.scss';

export const Card = ({ item }) => {
  return (
    <article className="card" key={item.id}>
      <div className="card-image">
        <Link to={item.href}>
          <img src={item.Img} alt="Image not found" width="350" height="240" />
        </Link>
        <h3 className="title">{item.title}</h3>
      </div>
    </article>
  );
};
export const CardContent = ({ item }) => {
  return (
    <article className="card-content" key={item.id}>
      <div className="card-content-image">
        <Link to={item.href}>
          <img src={item.Img} alt="Image not found" width="200" height="150" />
        </Link>
      </div>
    </article>
  );
};
export const CardPartner = ({ item }) => {
  return (
    <article className="card-partner" key={item.id}>
      <div className="card-partner-image">
        <img src={item.logo} alt="Image not found" width="100" height="80" />
      </div>
    </article>
  );
};
export const CardBlog = ({ item }) => {
  return (
    <article className="card-blog">
      <div>
        <a href={item.herf} id="">
          <div>
            <img className="card-blog-image" src={item.Img} />
          </div>
          <div className="new-base">
            <p id="title-new">{item.Content}</p>
            <img
              id="line"
              src="https://vtiacademy.edu.vn/template/frontend/images/line.png"
            />
            <p id="date">{item.Date}</p>
            <img
              id="go-click"
              src="https://vtiacademy.edu.vn/template/frontend/images/affter_new.png"
            />
          </div>
        </a>
      </div>
    </article>
  );
};
export const CardCoach = ({ item }) => {
  return (
    <>
      <article className="coach">
        <section className="container-coach">
          <div className="card-coach">
            <img
              className="card-coach-image"
              src={item.img}
              alt="Image Not Found"
            />
            <div className="title-name">
              <h1 id="name">{item.name}</h1>
            </div>
          </div>
          <div className="details-coach">
            <p id="row-name">{item.name}</p>
            <p>{item.row1}</p>
            <p>{item.row2}</p>
            <p>{item.row3}</p>
            <p>{item.row4}</p>
            <p>{item.row5}</p>
          </div>
        </section>
      </article>
    </>
  );
};
export const CardStudent = ({ item }) => {
  return (
    <>
      <article className="student">
        <section className="container">
          <div>
            <div className="card-student">
              <img
                className="card-student-image"
                src={item.img}
                alt="Image Not Found"
              />
            </div>
            <div className="title-name">
              <h3 id="name">{item.name}</h3>
            </div>
            <div className="title-class">
              <p id="class">{item.class}</p>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};
