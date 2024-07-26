// useRouteError Lấy ra thông báo lỗi của react router dom
import { useRouteError } from 'react-router-dom';
import notFound from './../../image/notFound.svg';
import './errorPage.scss';
import { Header } from '../Home/Header';
// import {}

export const ErrorPage = () => {
  // get ra status loi cuar page
  const error = useRouteError();
  // console.error(error);

  return (
    <>
      <div id="error-page" className="error-page">
        <article>
          <Header />
          <h2>Sorry! Page Not Found</h2>
          <img src={notFound} alt="notFoundImage" width="50%" />
        </article>
      </div>
    </>
  );
};
