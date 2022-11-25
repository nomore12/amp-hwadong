import React from 'react';
import styled from 'styled-components';

interface PropsType {
  children?: React.ReactNode;
}

const ContainerStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 768px;
  text-align: end;
  padding: 200px 4rem 0 4rem;
  margin-bottom: 20rem;

  @media only screen and (max-width: 1024px) {
    width: 100%;
    padding: 1rem;
    margin-bottom: 10rem;
  }
`;

const ContentContainer = ({ children }: PropsType) => {
  return (
    <ContainerStyle className="content-container">{children}</ContainerStyle>
  );
};

export default ContentContainer;
