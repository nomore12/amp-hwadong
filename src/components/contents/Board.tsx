import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ListItem from '../common/ListItem';
import useSubjectReplacer from '../../hooks/SubjectReplacer';
import { itemHasText } from '@aws-amplify/ui-react/dist/types/primitives/Collection/utils';

interface PropsType {
  lists: Array<{
    id: number;
    subject: string;
    createdAt: string;
    uuid: string;
  }>;
  boardType: string;
}

const ContainerStyle = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-width: 640px;
  margin-bottom: 10rem;
  border-bottom: 1px solid rgba(39, 39, 42, 0.6);
`;

const Board = ({ boardType, lists }: PropsType) => {
  const [type, setType] = useState(boardType);
  const ref = useRef<any>(null);
  useSubjectReplacer({
    ref: ref,
    subject: boardType,
  });

  return (
    <ContainerStyle ref={ref} className="board">
      {lists &&
        lists.map((item, index) => {
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
  );
};

export default Board;
