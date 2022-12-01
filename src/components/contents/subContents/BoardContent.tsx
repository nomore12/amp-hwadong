import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation, useParams } from 'react-router-dom';
import ListItem from 'src/components/common/ListItem';
import { animateScroll } from 'react-scroll';
import { useAppDispatch } from '../../../store/Hooks';
import useMouseEventHook from '../../../hooks/UseMouseEventHook';
import { changeCurr, changeSubject, changeText } from '../../../store/Slice';

interface PropsType {
  id?: number;
  createdAt?: string;
  subject?: string;
  content?: string;
  imgUrl: string;
  type: string;
  uuid: string;
}

const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 467px;

  @media screen and (max-width: 768px) {
    height: calc(100vh - 160px);
    padding-top: 160px;
  }

  .board-content-area {
    height: 100%;
    font-weight: 300;
    padding-top: 1rem;
    text-align: start;
  }

  & * {
    list-style: none;
  }
`;

const BoardContent = () => {
  const param = useParams();
  const dispatch = useAppDispatch();
  const { onMouseEnter, onMouseLeave, navigateToPage } = useMouseEventHook();
  const location = useLocation();
  const [type, setType] = useState('');

  const eventListener = () => {
    dispatch(changeCurr('archive'));
    dispatch(changeText('back'));
    dispatch(
      changeSubject(
        location.pathname === '/main/notice' ? '공지사항' : '연간사업보고'
      )
    );
  };

  useEffect(() => {
    dispatch(changeCurr('archive'));
    dispatch(changeText('back'));
    dispatch(
      changeSubject(
        location.pathname === '/main/notice' ? '공지사항' : '연간사업보고'
      )
    );

    window.addEventListener('focus', eventListener);

    return () => {
      dispatch(changeCurr('main'));
      dispatch(changeText(''));
      dispatch(
        changeSubject(
          location.pathname === '/main/notice' ? '공지사항' : '연간사업보고'
        )
      );
      window.removeEventListener('focus', eventListener);
    };
  }, []);

  useEffect(() => {
    animateScroll.scrollToTop();
  }, []);

  return (
    <ContainerStyle>
      <ListItem
        index={1}
        subject={'홈페이지 오픈 준비중입니다.'}
        createdAt={'2022-11-13'}
        type={location.pathname === '/main/notice' ? 'NOTICE' : 'REPORT'}
        uuid={'ddd'}
      />
      <p className="board-content-area">{'홈페이지 오픈 준비중입니다.'}</p>
    </ContainerStyle>
  );
};

export default BoardContent;
