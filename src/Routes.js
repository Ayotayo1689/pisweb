import { Navigate, useRoutes } from 'react-router-dom';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Document from './Pages/Document';
import Faq from './Pages/Faq';
// layouts
import Home from './Pages/Home';
import Login from './Pages/Login';
import Payment from './Pages/Payment';
import Services from './Pages/Services';
import Signup from './Pages/Signup';
import Terms from './Pages/Terms';
import Result from './Pages/Result';
//




// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([

    {
      path: '/',
      element: <Home /> ,
    },
    {
      path: '/about',
      element: <About /> ,
    },
    {
      path: '/gallery',
      element: <Faq /> ,
    },
    {
      path: '/student_portal',
      element: <Services /> ,
    },
    {
      path: '/terms',
      element: <Terms /> ,
    },
    {
      path: '/contact',
      element: <Contact /> ,
    },
    {
      path: '/faq',
      element: <Document /> ,
    },
    {
      path: '/login',
      element: <Login /> ,
    },
    {
      path: '/register',
      element: <Signup /> ,
    },
    {
      path: '/payment-portal',
      element: <Payment /> ,
    },

    {
      path: '/dashboard',
      element: <Result /> ,
    },



  
  ]);

  return routes;
}
