import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blog from '../pages/Blog';
import React from 'react';
import { PrivateLayout, PublicLayout } from '../components/Layout';
import LoginPage from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Users from '../pages/Users';
import SinglePost from '../pages/SinglePost';
import SingleUser from '../pages/SingleUser';
import { Albums } from '../pages/Albums/Albums';
import SingleAlbum from '../pages/SingleAlbum/SingleAlbum';
import Todo from '../pages/Todo';

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
					}
				/>
				<Route
					path='/users'
					element={
						<PrivateLayout>
							<Users />
						</PrivateLayout>
					}
				/>
				<Route
					path='/users/:userId'
					element={
						<PrivateLayout>
							<SingleUser />
						</PrivateLayout>
					}
				/>
				<Route
					path='/albums'
					element={
						<PrivateLayout>
							<Albums />
						</PrivateLayout>
					}
				/>
				<Route
					path='/albums/:albumId'
					element={
						<PrivateLayout>
							<SingleAlbum />
						</PrivateLayout>
					}
				/>
				<Route
					path='/todo'
					element={
						<PrivateLayout>
							<Todo></Todo>
						</PrivateLayout>
					}></Route>
			</Routes>
		</BrowserRouter>
	);
}
