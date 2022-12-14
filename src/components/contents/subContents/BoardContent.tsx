import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation, useParams } from 'react-router-dom';
import ListItem from 'src/components/common/ListItem';
import { animateScroll } from 'react-scroll';
import { useAppDispatch } from '../../../store/Hooks';
import useMouseEventHook from '../../../hooks/UseMouseEventHook';
import { changeCurr, changeSubject, changeText } from '../../../store/Slice';
import { API, graphqlOperation, Storage } from 'aws-amplify';
import * as queries from 'src/graphql/queries';
import { saveAs } from 'file-saver';

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
    //padding-top: 1rem;
    text-align: start;
    font-size: 0.8rem;
    line-height: 1.6rem;
    padding: 2rem 0 0 4.5rem;
    white-space: pre-wrap;
  }

  .notice-img {
    padding-left: 4.5rem;
    max-width: 560px;
  }

  .pdf-download {
    //position: relative;
    ////z-index: 3;
    //pointer-events: none;
    border: 1px solid rgba(39, 39, 42, 0.6);
    padding: 8px;
    font-size: 12px;
    border-radius: 4px;
    color: rgba(39, 39, 42, 0.6);
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
  const [imgUrl, setImgUrl] = useState('');

  const eventListener = () => {
    dispatch(changeCurr('archive'));
    dispatch(changeText('back'));
    dispatch(
      changeSubject(
        location.pathname === '/main/notice' ? '????????????' : '??????????????????'
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
    setType(data.getPosts.type);
    console.log(data);
    const fileKey = `${data.getPosts.type?.toLowerCase()}/${
      data.getPosts.filePath
    }`;
    const url = await Storage.get(fileKey);
    setImgUrl(url);
  };

  useEffect(() => {
    animateScroll.scrollToTop();
    fetchPost();

    dispatch(changeCurr('archive'));
    dispatch(changeText('back'));
    dispatch(
      changeSubject(
        location.pathname.includes('notice') ? '????????????' : '??????????????????'
      )
    );

    window.addEventListener('focus', eventListener);

    return () => {
      dispatch(changeCurr('main'));
      dispatch(changeText(''));
      dispatch(
        changeSubject(
          location.pathname === '/main/notice' ? '????????????' : '??????????????????'
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
          {type === 'NOTICE' ? (
            <div>
              <img className="notice-img" src={imgUrl} />
            </div>
          ) : (
            <div
              className="link"
              onMouseEnter={(e) => onMouseEnter(e, ' ')}
              onMouseLeave={(e) => onMouseLeave(e, 'back')}>
              <button
                className="link pdf-download"
                onClick={() => {
                  console.log('download');
                  saveAs(imgUrl, imgUrl + '.pdf');
                }}>
                ?????? ????????????
              </button>
            </div>
          )}
          <p className="board-content-area">{contentData.desc}</p>
        </>
      )}
    </ContainerStyle>
  );
};

export default BoardContent;
