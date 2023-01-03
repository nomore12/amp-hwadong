import React from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  Routes,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Landing from 'src/pages/Landing';
import Main from 'src/pages/Main';
import NoticeContent from 'src/components/content/subContent/NoticeContent';
import Login from 'src/pages/Login';
import PostCreate from 'src/pages/PostCreate';
import GalleryCreate from 'src/pages/GalleryCreate';
import PostUpdate from '../pages/PostUpdate';
import NewPostCreate from '../pages/NewPostCreate';
import NewPostUpdate from '../pages/NewPostUpdate';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/main/*" element={<Main />}></Route>
        <Route path="/login" element={<Login />}></Route>
        {/*<Route*/}
        {/*  path="/post/notice"*/}
        {/*  element={<PostCreate postType="NOTICE" />}></Route>*/}
        <Route
          path="/post/notice"
          element={<NewPostCreate postType="NOTICE" />}></Route>
        <Route
          path="/post/report"
          element={<NewPostCreate postType="REPORT" />}></Route>
        {/*<Route*/}
        {/*  path="/post/report"*/}
        {/*  element={<PostCreate postType="REPORT" />}></Route>*/}
        <Route path="/post/:id" element={<NewPostUpdate />}></Route>
        <Route path="/wco" element={<GalleryCreate type="WCO" />}></Route>
        <Route path="/etc" element={<GalleryCreate type="ETC" />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
