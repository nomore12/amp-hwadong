import React from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../store/Hooks';
import { onOffOverlay } from '../store/Slice';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

// interface PropsType {
//
// };

const ContainerStyle = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(227, 222, 217, 0.9);
  z-index: 3;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    font-size: 1rem;

    & h1 {
      color: #414141ff;
      width: 10rem;
      text-align: center;
      padding: 2px 4px;
      border-radius: 3px;
      //border: 1px solid #414141ff;
      //background-color: rgba(255, 255, 255, 0.4);
    }
  }
`;

const Overlay = () => {
  const dispatch = useAppDispatch();
  const enabled = useAppSelector((state) => state.overlay.enabled);
  const navigate = useNavigate();

  const onClick = () => {
    dispatch(onOffOverlay(!enabled));
  };

  return (
    <ContainerStyle>
      <div
        onClick={() => {
          navigate('/main');
          dispatch(onOffOverlay(!enabled));
        }}>
        <h1>홈</h1>
      </div>
      <Link smooth spy to="설립목적" offset={-250} onClick={onClick}>
        <h1>설립목적</h1>
      </Link>
      <Link smooth spy to="연혁" offset={-250} onClick={onClick}>
        <h1>연혁</h1>
      </Link>
      <Link smooth spy to="사업내용" offset={-250} onClick={onClick}>
        <h1>사업내용</h1>
      </Link>
      <Link smooth spy to="위치및연락처" offset={-250} onClick={onClick}>
        <h1>위치 및 연락처</h1>
      </Link>
      <Link smooth spy to="재단활동소개" offset={-250} onClick={onClick}>
        <h1>재단활동소개</h1>
      </Link>
      <Link smooth spy to="재단활동아카이브" offset={-250} onClick={onClick}>
        <h1>재단활동아카이브</h1>
      </Link>
      <Link smooth spy to="공지사항" offset={-250} onClick={onClick}>
        <h1>공지사항</h1>
      </Link>
      <Link smooth spy to="연간사업보고" offset={-250} onClick={onClick}>
        <h1>연간사업보고</h1>
      </Link>
    </ContainerStyle>
  );
};

export default Overlay;
