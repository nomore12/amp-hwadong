import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Authenticator, Text } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { API, Amplify, graphqlOperation } from 'aws-amplify';
import config from '../aws-exports';
import { Button } from '@aws-amplify/ui-react';

Amplify.configure(config);

const ContainerStyle = styled.div`
  width: 100%;
  padding: 4rem;
  min-height: 100vh;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;

  .admin-btn {
    width: 12rem;
    height: 4rem;
    border: 1px solid gray;
    border-radius: 0.4rem;
  }
`;

const Login = () => {
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  const moveTo = (location: string) => {
    navigate(`/${location}`);
  };

  return (
    <Authenticator loginMechanisms={['email']}>
      {({ signOut, user }) => (
        <ContainerStyle>
          <Text variation="primary" fontSize="1.2rem">
            Admin: {user?.username}
          </Text>
          <Button
            variation="primary"
            size="large"
            onClick={() => moveTo('post')}>
            공지사항 / 사업보고 글쓰기
          </Button>
          <Button
            variation="primary"
            size="large"
            onClick={() => moveTo('gallery')}>
            WCO / 기타목적사업 글쓰기
          </Button>
          <Button variation="primary" size="large" onClick={signOut}>
            Sign out
          </Button>
        </ContainerStyle>
      )}
    </Authenticator>
  );
};

export default Login;
