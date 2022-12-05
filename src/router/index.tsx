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

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/main/*" element={<Main />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/post/notice"
          element={<PostCreate postType="NOTICE" />}></Route>
        <Route
          path="/post/report"
          element={<PostCreate postType="REPORT" />}></Route>
        <Route path="/post/:id" element={<PostUpdate />}></Route>
        <Route path="/gallery" element={<GalleryCreate type="WCO" />}></Route>
        <Route path="/gallery" element={<GalleryCreate type="ETC" />}></Route>
        {/*<Route path="/main/:id" element={<Main />}></Route>*/}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
