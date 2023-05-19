import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// import colors from './sass/variables.scss';

import Test1 from './components/shared/testt/Test';
// import Preloader from './components/shared/loaders/preloader/Preloader';
// import Header from './components/widgets/header/Header';
// import Footer from './components/widgets/footer/Footer';

// const MainPage = lazy(() => import('./views/main/MainPage'));
// const Vouchers = lazy(() => import('./views/vouchers/VouchersPage'));
// const ErrorPage = lazy(() => import('./views/404Page/404Page'));
// const SoonPage = lazy(() => import('./views/soon/Soon'));

function App() {
  return (
    <>
      <Test1 />
    </>
  );
}

export default App;
