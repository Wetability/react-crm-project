/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from 'react-router-dom';

// * Components
import App from './App';
import { Suspense, lazy } from 'react';
import Loading from './components/Loading/Loading';

const Home = lazy(() => import('./pages/Home/Home'));
const Menu = lazy(() => import('./pages/Menu/Menu'));
const About = lazy(() => import('./pages/About/About'));
const Registration = lazy(() => import('./pages/Registration/Registration'));
const Authorization = lazy(() => import('./pages/Authorization/Authorization'));
const Product = lazy(() => import('./pages/Product/Product'));

// * Element
function Element({ component }: { component: JSX.Element }) {
  return <Suspense fallback={<Loading />}>{component}</Suspense>;
}

export default createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Element component={<Home />} />,
        children: [],
      },
      {
        path: '/about',
        element: <Element component={<About />} />,
        children: [],
      },
      {
        path: '/menu',
        element: <Element component={<Menu />} />,
        children: [],
      },
      {
        path: '/registration',
        element: <Element component={<Registration />} />,
        children: [],
      },
      {
        path: '/authorization',
        element: <Element component={<Authorization />} />,
        children: [],
      },
      {
        path: '/menu/:productId',
        element: <Element component={<Product />} />,
        children: [],
      },
    ],
  },
]);
