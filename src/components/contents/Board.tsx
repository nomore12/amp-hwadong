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

const PaginationStyle = styled(Pagination)`
  //.amplify-pagination__item-button :first-child {
  //  display: none;
  //}

  .amplify-flex li:first-child {
    display: none;
  }

  .amplify-flex li:last-child {
    display: none;
  }
`;

const ContainerStyle = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-width: 640px;
  margin-bottom: 1rem;
  border-bottom: 1px solid rgba(39, 39, 42, 0.6);
`;

const BottomPadding = styled.div`
  .bottom {
    main-height: 360px;
  }
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

  useEffect(() => {
    console.log('lists', lists);
  }, []);

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
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginBottom: '80px',
      }}>
      <ContainerStyle ref={ref} className="board">
        {lists &&
          lists.map((item: any, index) => {
            return (
              <ListItem
                key={index}
                index={index + 1}
                subject={item.title}
                createdAt={item.createdAt}
                type={boardType}
                uuid={item.uuid}
              />
            );
          })}
      </ContainerStyle>
      <PaginationStyle
        onChange={onPaginationChange}
        currentPage={currPage}
        siblingCount={3}
        onPrevious={() => setCurrPage(1)}
        onNext={() =>
          setCurrPage(
            Math.ceil(
              boardType === '공지사항'
                ? postInfo.notices.length / 10
                : postInfo.reports.length / 10
            )
          )
        }
        totalPages={Math.ceil(
          boardType === '공지사항'
            ? postInfo.notices.length / 10
            : postInfo.reports.length / 10
        )}
      />
      <BottomPadding>
        {boardType === '연간사업보고' && (
          <>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </>
        )}
      </BottomPadding>
    </div>
  );
};

export default Board;
