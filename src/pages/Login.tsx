import React, { useEffect, useState } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { API, Amplify, graphqlOperation } from 'aws-amplify';
import { createPosts, updatePosts, deletePosts } from '../graphql/mutations';
import { listPosts } from '../graphql/queries';
import config from '../aws-exports';
Amplify.configure(config);

const Login = () => {
  const [list, setList] = useState([]);

  const fetchPost = async () => {
    const posts = await API.graphql(graphqlOperation(listPosts));
    // setList(typeof posts);
    const { data } = { ...posts } as any;
    console.log(typeof data.listPosts.items[0].title);
    setList(data.listPosts.items);
  };

  useEffect(() => {
    fetchPost()
      .then((data) => console.log('data: ', data))
      .catch((err) => console.log('err', err));
  }, []);

  return (
    <Authenticator loginMechanisms={['email']}>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user?.username}</h1>
          <div>
            {list &&
              list
                .sort((prev, next) =>
                  prev['createdAt'] < next['createdAt'] ? -1 : 1
                )
                .map((item, index) => {
                  return (
                    <div key={index} style={{ border: '1px solid black' }}>
                      <div>{item['createdAt']}</div>
                      <div>{item['title']}</div>
                      <div>{item['desc']}</div>
                    </div>
                  );
                })}
          </div>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
};

export default Login;
