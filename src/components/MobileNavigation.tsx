import React from 'react';
import styled from 'styled-components';
import { onOffOverlay } from 'src/store/Slice';
import { useAppDispatch, useAppSelector } from 'src/store/Hooks';
import { Cross as Hamberger } from 'hamburger-react';

const ContainerStyle = styled.div`
  position: fixed;
  top: 0.5rem;
  right: 1.5rem;
  //background-color: black;
  width: 2rem;
  height: 2rem;
  z-index: 4;
  display: none;
  //border: 1px solid black;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const MobileNavigation = () => {
  const dispatch = useAppDispatch();
  const overlay = useAppSelector((state) => state.overlay.enabled);

  const onClick = () => {
    console.log('mobile nav click');
    dispatch(onOffOverlay(!overlay));
  };
  return (
    <ContainerStyle className="" onClick={onClick}>
      {/*<div>nav</div>*/}
      <Hamberger direction="left" toggled={overlay}></Hamberger>
    </ContainerStyle>
  );
};

export default MobileNavigation;
