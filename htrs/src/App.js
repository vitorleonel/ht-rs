import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';

// import Header from './components/Header';
import Routes from './routes';

import GlobalStyles from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer autoClose={3000} pauseOnHover={false} />
      {/* <Header /> */}
      <Routes />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
