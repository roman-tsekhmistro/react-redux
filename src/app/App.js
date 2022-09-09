import './App.scss';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Home from '../pages/home';
import React from 'react';
import LoginPage from '../pages/login';

function App() {
  let localStorage = window.localStorage;
  localStorage.setItem('TOKEN', 'uzHqcH52qD');
  let TOKEN = localStorage.getItem('TOKEN');

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={TOKEN ? <Navigate to='home'/> : <LoginPage/>}/>
          <Route path="/home" element={<Home/>}></Route>
          {/*<Route path="users" element={<UsersPage/>}>*/}
          {/*  <Route path=":userId" element={<UserSinglePage/>}></Route>*/}
          {/*</Route>*/}
        </Routes>
      </BrowserRouter>
  );
}

export default App;
