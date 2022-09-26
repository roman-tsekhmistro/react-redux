import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blog from '../pages/Blog';
import React from 'react';
import { PrivateLayout, PublicLayout } from '../components/Layout';
import LoginPage from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Users from '../pages/Users';
import SinglePost from '../pages/SinglePost';

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={
						<PrivateLayout>
							<Dashboard />
						</PrivateLayout>
					}
				/>
				<Route
					path='/login'
					element={
						<PublicLayout>
							<LoginPage />
						</PublicLayout>
					}
				/>
				<Route
					path='/blog'
					element={
						<PrivateLayout>
							<Blog />
						</PrivateLayout>
					}
				/>
				<Route
					path='/blog/:postId'
					element={
						<PrivateLayout>
							<SinglePost />
						</PrivateLayout>
					}></Route>
				<Route
					path='/users'
					element={
						<PrivateLayout>
							<Users />
						</PrivateLayout>
					}>
					{/*  <Route path=":userId" element={<UserSinglePage/>}></Route>*/}
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
