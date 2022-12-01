import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation, useParams } from 'react-router-dom';
import ListItem from 'src/components/common/ListItem';
import { animateScroll } from 'react-scroll';
import { useAppDispatch } from '../../../store/Hooks';
import useMouseEventHook from '../../../hooks/UseMouseEventHook';
import { changeCurr, changeSubject, changeText } from '../../../store/Slice';
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from 'src/graphql/queries';

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
  const [contentData, setContentData] = useState<any>();
  const [loading, setLoading] = useState(true);

  const eventListener = () => {
    dispatch(changeCurr('archive'));
    dispatch(changeText('back'));
    dispatch(
      changeSubject(
        location.pathname === '/main/notice' ? '공지사항' : '연간사업보고'
      )
    );
  };

  const fetchPost = async () => {
    const post = await API.graphql({
      query: queries.getPosts,
      variables: { id: param.id },
    });
    const { data } = { ...post } as any;
    setContentData(data.getPosts);
    setLoading(false);
  };

  useEffect(() => {
    animateScroll.scrollToTop();
    fetchPost();

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
  }, [loading]);

  return (
    <ContainerStyle>
      {loading ? (
        <div>loading...</div>
      ) : (
        <>
          <ListItem
            index={1}
            subject={contentData.title}
            createdAt={contentData.createdAt}
            type={contentData.type}
            uuid={contentData.id}
          />
          <p className="board-content-area">{contentData.desc}</p>
        </>
      )}
    </ContainerStyle>
  );
};

export default BoardContent;
