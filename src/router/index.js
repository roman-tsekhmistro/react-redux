import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import React from 'react';
import {PrivateLayout, PublicLayout} from '../components/Layout';
import LoginPage from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Users from '../pages/Users';

export default function Router() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrivateLayout><Home/></PrivateLayout>}/>
          <Route path="/login" element={<PublicLayout><LoginPage/></PublicLayout>}></Route>
          <Route path="/dashboard" element={<PrivateLayout><Dashboard/></PrivateLayout>}></Route>
          <Route path="/users" element={<PrivateLayout><Users/></PrivateLayout>}></Route>
          {/*  <Route path=":userId" element={<UserSinglePage/>}></Route>*/}
          {/*</Route>*/}
        </Routes>
      </BrowserRouter>
  );
}