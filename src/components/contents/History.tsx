import React, { useRef } from 'react';
import styled from 'styled-components';
import useSubjectReplacer from '../../hooks/SubjectReplacer';

interface PropsType {}

const ContainerStyle = styled.div`
  //display: flex;
  //flex-direction: column;
  //align-items: flex-end;
  //font-size: 0.9rem;
  //gap: 1.8rem;
  //color: rgba(39, 39, 42, 1);
  //font-weight: 400;
  //width: 320px;
  //line-height: 4rem;
  //
  //p {
  //  word-break: keep-all;
  //}

  display: flex;
  flex-direction: column;
  font-size: 0.9rem;

  .history-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.9rem;

    .history-item__year {
      color: rgba(39, 39, 42, 0.8);
    }

    .history-item__desc {
      width: 70%;
      word-break: keep-all;
      color: rgba(39, 39, 42, 0.8);

      @media screen and (max-width: 720px) {
        text-align: start;
      }
    }
  }
`;

const historyContent = [
  ['2007년', '재단법인 화동문화재단 설립'],
  [
    '2008년',
    '전통문화 계승발전 후원사업의 일환으로 공동사업진행 다문화 열린 사회를 위한 세계문화오픈(WCO) 후원사업',
  ],
  ['2009년', '전통문화학교 장학 지원사업'],
  ['2010년', '한옥공모전 공동사업 (헤리티지 투모로우 프로젝트)'],
  ['2011년', '전통의식주 장인 길러내기 사업, 원불교 종교단체 후원사업'],
  ['2012년', '전통문화 계승사업을 확대추진을 위한 의식주부문 연구'],
  ['2013년', '전통문화 계승사업의 수익사업 승인 및 시작'],
  ['2014년', '재단명 변경 (재단법인 월드컬처오픈 화동문화재단)'],
  ['2019년', '재단명 원복 (재단법인 화동문화재단)'],
  ['2021년', '재단법인 유민문화재단과의 일원화 운영을 위한 절차 진행'],
  ['2022년', '재단명 변경 (재단법인 중앙화동재단)'],
];

const History = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  useSubjectReplacer({ ref: ref, subject: '연혁' });

  return (
    <ContainerStyle ref={ref}>
      <div>
        {historyContent &&
          historyContent.map((item, index) => {
            return (
              <div className="history-item" key={index}>
                <p className="history-item__year">{item[0]}</p>
                <p className="history-item__desc">{item[1]}</p>
              </div>
            );
          })}
      </div>
    </ContainerStyle>
  );
};

export default History;
