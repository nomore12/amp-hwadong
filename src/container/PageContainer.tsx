import React, { useEffect } from 'react';
import styled from 'styled-components';
import { animateScroll } from 'react-scroll';

interface PropsType {
  children: React.ReactNode;
}

const ContainerStyle = styled.div`
  display: flex;
  width: 768px;
  justify-content: center;
  text-align: end;
  padding: 40px 4rem 0 4rem;
  margin-bottom: 20rem;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 1rem;
    margin-bottom: 10rem;
  }
`;

const PageContainer = ({ children }: PropsType) => {
  useEffect(() => {
    animateScroll.scrollToTop();
  }, []);
  return <ContainerStyle>{children}</ContainerStyle>;
};

export default PageContainer;
