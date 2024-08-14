import { Route, Routes, Navigate } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<h1>홈페이지</h1>}></Route>
      <Route path='/posts' element={<h1>글 목록 페이지</h1>}></Route>
      <Route path='/posts/:id' element={<h1>글 상세 페이지</h1>}></Route>
      <Route path='/posts/new' element={<h1>글 작성 페이지</h1>}></Route>
      <Route path='/posts/edit/:id' element={<h1>글 수정 페이지</h1>}></Route>
      <Route path='/profile' element={<h1>프로필 페이지</h1>}></Route>
      <Route path='/profile/edit' element={<h1>프로필 수정 페이지</h1>}></Route>
      <Route path='/notifications' element={<h1>알림 페이지</h1>}></Route>
      <Route path='/search' element={<h1>검색 페이지</h1>}></Route>
      <Route path='/users/login' element={<h1>로그인 페이지</h1>}></Route>
      <Route path='/users/signup' element={<h1>회원가입 페이지</h1>}></Route>
      <Route path='*' element={<Navigate replace to='/' />}></Route>
    </Routes>
  );
}

export default App;
