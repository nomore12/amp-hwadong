import React, { useEffect } from 'react';
import Router from 'src/router';
import './index.css';
import Cursor from 'src/components/Cursor';
import MouseContextProvider from './components/context/MouseContext';
import { animateScroll } from 'react-scroll';
import { Amplify, API, graphqlOperation, Auth, Storage } from 'aws-amplify';
import config from './aws-exports';
import { listPosts } from './graphql/queries';

Auth.configure(config);

function App() {
  const fetchPost = async () => {
    const posts = await API.graphql(graphqlOperation(listPosts));
    // setList(typeof posts);
    const { data } = { ...posts } as any;
  };

  useEffect(() => {
    // fetchPost();

    animateScroll.scrollToTop();
    const windowClose = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      /** 리턴밸류에 값을 넣으면 사이트에서 나가시겠습니까? 가 뜨는늣. */
      // if (event) event.returnValue = '';
      animateScroll.scrollTo(0, { duration: 0 });
      localStorage.removeItem('curr');
      // return '';
    };
    window.onbeforeunload = windowClose;
  }, []);

  return (
    <div className="App">
      <Cursor />
      <Router />
    </div>
  );
}

export default App;
