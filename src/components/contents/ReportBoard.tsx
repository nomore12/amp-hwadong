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

const ReportBoard = ({ boardType, lists }: PropsType) => {
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

  const currList = [
    {
      id: 1,
      subject: '2021년 귀속 결산서류 등의 공시 (파일: 화동_21년_공시_재공시)',
      createdAt: '2023-05-02',
      uuid: '2021',
    },
    {
      id: 2,
      subject: '2022년 귀속 결산서류 등의 공시 (파일: 화동_22년_공시(신고))',
      createdAt: '2023-05-02',
      uuid: '2022',
    },
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginBottom: '80px',
      }}>
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

export default ReportBoard;
