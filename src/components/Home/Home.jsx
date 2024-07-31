import { Header } from './Header.jsx';
import { Content } from './Content.jsx';
// import react router dom to Home component
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorPage } from '../ErrorPage/ErrorPage.jsx';
import { Course } from '../CoursePage/Course.jsx';
import { Introduce } from '../IntroducePage/Introduce.jsx';
import { Partner } from '../PartnerPage/Partner.jsx';
import { Training } from '../TrainingPage/Training.jsx';
import { Blog } from '../BlogPage/Blog.jsx';
import { Coach } from '../CoachPage/Coach.jsx';
import { Contact } from '../Contact/Contact.jsx';
import { Student } from '../Student/Student.jsx';
import { PMPDetail } from '../CourseDetail/PMP/PMPDetail.jsx';
import { DataAnalystDetail } from '../CourseDetail/DataAnalyst/DataAnalyst.jsx';
import { BADetail } from '../CourseDetail/BA/BADetail.jsx';
import { CCBADetail } from '../CourseDetail/CCBA/CCBADetail.jsx';
import { TesterDetail } from '../CourseDetail/Tester/TesterDetail.jsx';
import { TesterISTQBDetail } from '../CourseDetail/TesterISTQB/TesterISTQB.jsx';
import { FrontEndDetail } from '../CourseDetail/FrontEnd/FrontEndDetail.jsx';
import { AutomationTestDetail } from '../CourseDetail/AutomationTest/AutomationTestDetail.jsx';
import { FullStackDetail } from '../CourseDetail/FullStack/FullStack.jsx';
import { Login } from '../LoginPage/Login.jsx';
import { RigisterForm } from '../LoginPage/RigisterForm/RigisterForm.jsx';

// Khởi tạo ra một react router dom -- khởi tạo ra một bộ điều hướng cho website
const routerHome = createBrowserRouter([
  {
    path: '/login', // go to login
    element: <Login />,
  },
  {
    path: '/rigister', // go to FullStackDetail Detail
    element: <RigisterForm />,
  },
  {
    path: '/', // go to HomePage
    element: <Header />,
    errorElement: <ErrorPage />, // Khi chuyển đến 1 liên kết lỗi sẽ hiển thị lỗi ErrorPage
    children: [

      {
        path: '/', // go to HomePage
        element: <Content />, // element là nội dung
      },
      {
        path: '/introduce', // go to Introduce
        element: <Introduce />,
      },
      {
        path: '/course', // go to course
        element: <Course />,
      },
      {
        path: '/train', // go to train
        element: <Training />,
      },
      {
        path: '/partner', // go to partner
        element: <Partner />,
      },
      {
        path: '/student', // go to student
        element: <Student />,
      },
      {
        path: '/coach', // go to coach
        element: <Coach />,
      },
      {
        path: '/blog', // go to blog
        element: <Blog />,
      },
      {
        path: '/contact', // go to contact
        element: <Contact />,
      },

      
      {
        path: '/PMP', // go to PMP Detail
        element: <PMPDetail />,
      },
      {
        path: '/DataAnalyst', // go to DataAnalyst Detail
        element: <DataAnalystDetail />,
      },
      {
        path: '/BA', // go to BA Detail
        element: <BADetail />,
      },
      {
        path: '/CCBA', // go to CCBA Detail
        element: <CCBADetail />,
      },
      {
        path: '/Tester', // go to Tester Detail
        element: <TesterDetail />,
      },
      {
        path: '/TesterISTQB', // go to TesterISTQB Detail
        element: <TesterISTQBDetail />,
      },
      {
        path: '/AutomationTest', // go to AutomationTest Detail
        element: <AutomationTestDetail />,
      },

      {
        path: '/FrontEnd', // go to FrontEnd Detail
        element: <FrontEndDetail />,
      },
      {
        path: '/FullStack', // go to FullStackDetail Detail
        element: <FullStackDetail />,
      },
    ],
  }
]);

export const Home = () => {
  return (
    <>
      <RouterProvider router={routerHome} />
    </>
  );
};
