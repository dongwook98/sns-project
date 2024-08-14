import { Navigate, Route, Routes } from 'react-router-dom';

import HomePage from 'pages/home';
import PostListPage from 'pages/posts';
import PostDetailPage from 'pages/posts/detail';
import PostNewPage from 'pages/posts/new';
import PostEditPage from 'pages/posts/edit';
import ProfilePage from 'pages/profile';
import ProfileEditPage from 'pages/profile/edit';
import NotificationsPage from 'pages/notifications';
import SearchPage from 'pages/search';
import LoginPage from 'pages/users/login';
import SignupPage from 'pages/users/signup';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/posts' element={<PostListPage />}></Route>
      <Route path='/posts/:id' element={<PostDetailPage />}></Route>
      <Route path='/posts/new' element={<PostNewPage />}></Route>
      <Route path='/posts/edit/:id' element={<PostEditPage />}></Route>
      <Route path='/profile' element={<ProfilePage />}></Route>
      <Route path='/profile/edit' element={<ProfileEditPage />}></Route>
      <Route path='/notifications' element={<NotificationsPage />}></Route>
      <Route path='/search' element={<SearchPage />}></Route>
      <Route path='/users/login' element={<LoginPage />}></Route>
      <Route path='/users/signup' element={<SignupPage />}></Route>
      <Route path='*' element={<Navigate replace to='/' />}></Route>
    </Routes>
  );
}
