import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ListItem from '../common/ListItem';
import useSubjectReplacer from '../../hooks/SubjectReplacer';
import { itemHasText } from '@aws-amplify/ui-react/dist/types/primitives/Collection/utils';
import { Pagination } from '@aws-amplify/ui-react';
import { useAppDispatch, useAppSelector } from '../../store/Hooks';
import {
  setCurrNoticeIndex,
  setCurrReportIndex,
  setNotices,
} from '../../store/Slice';

interface PropsType {
  lists: Array<{
    id: number;
    subject: string;
    createdAt: string;
    uuid: string;
  }>;
  boardType: string;
}

interface List {
  id: number;
  subject: string;
  createdAt: string;
  uuid: string;
}

const ContainerStyle = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-width: 640px;
  margin-bottom: 1rem;
  border-bottom: 1px solid rgba(39, 39, 42, 0.6);
`;

const Board = ({ boardType, lists }: PropsType) => {
  const [type, setType] = useState(boardType);
  const ref = useRef<any>(null);
  const postInfo = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();
  const [currPage, setCurrPage] = useState(1);
  // const [currList, setCurrList] = useState<any[]>();
  // const [loading, setLoading] = useState(true);

  // const currList = lists.slice(
  //   boardType === '공지사항'
  //     ? postInfo.currNoticeIndex
  //     : postInfo.currReportIndex,
  //   boardType === '공지사항'
  //     ? postInfo.currNoticeIndex + 10
  //     : postInfo.currReportIndex + 10
  // );

  const currList =
    boardType === '공지사항' ? postInfo.currNotices : postInfo.currReports;

  useSubjectReplacer({
    ref: ref,
    subject: boardType,
  });

  const onPaginationChange = (newIndex: number, prevIndex: number) => {
    setCurrPage(newIndex);
    dispatch(
      boardType === '공지사항'
        ? setCurrNoticeIndex(newIndex)
        : setCurrReportIndex(newIndex)
    );
    // console.log(
    //   'onChange',
    //   currPage,
    //   ', newIndex: ',
    //   newIndex,
    //   postInfo.currNotices
    // );
  };

  // useEffect(() => {
  //   return () => {
  //     dispatch(setCurrNoticeIndex(1));
  //     dispatch(setCurrReportIndex(1));
  //   };
  // }, [currPage]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <ContainerStyle ref={ref} className="board">
        {currList &&
          currList.map((item: any, index) => {
            return (
              <ListItem
                key={index}
                index={item.id}
                subject={item.subject}
                createdAt={item.createdAt}
                type={boardType}
                uuid={item.uuid}
              />
            );
          })}
      </ContainerStyle>
      <Pagination
        onChange={onPaginationChange}
        currentPage={currPage}
        siblingCount={3}
        totalPages={Math.ceil(
          boardType === '공지사항'
            ? postInfo.notices.length / 10
            : postInfo.reports.length / 10
        )}
      />
    </div>
  );
};

export default Board;
