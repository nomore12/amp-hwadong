import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface PropsType {
  index: number;
  subject: string;
  createdAt: string;
  type: string;
  uuid: string;
}

const ContainerStyle = styled.li`
  align-self: flex-end;
  width: 100%;
  font-size: 0.8rem;
  //padding: 2px 0;

  .board-list-item {
    display: flex;
    justify-content: space-between;
    margin: 0;
    max-width: 640px;
    border-top: 1px solid rgba(39, 39, 42, 0.6);
    padding: 5px 0;

    .list-item__index,
    .list-item__subject,
    .list-item__created-at {
      color: rgba(39, 39, 42, 0.8);
      font-weight: 300;
    }

    &:last-child {
      //border-bottom: 1px solid rgba(39, 39, 42, 0.6);
    }

    .list-item__index {
      min-width: 2.5rem;
    }

    .list-item__subject {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding: 0 1rem 0 4rem;
    }

    .list-item__created-at {
      min-width: 7rem;
      padding-right: 0.5rem;
    }
  }
`;

const ListItem = ({ index, subject, createdAt, type, uuid }: PropsType) => {
  const [postType, setPostType] = useState(type);

  return (
    <ContainerStyle>
      <Link
        to={`/main/notice/${uuid}`}
        className="board-list-item"
        onClick={() => {
          localStorage.setItem(
            'curr',
            String(document.documentElement.scrollTop)
          );
        }}>
        <div className="list-item__index">{index}</div>
        <div className="list-item__subject">{subject}</div>
        <div className="list-item__created-at">{createdAt}</div>
      </Link>
    </ContainerStyle>
  );
};

export default ListItem;
