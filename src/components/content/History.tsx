import React, { useRef } from 'react';
import useSubjectReplacer from 'src/hooks/SubjectReplacer';

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
    <div ref={ref} className="w-720 h-128 flex flex-row justify-end mt-48 mb-8">
      <div className="flex flex-col items-end gap-4 text-sm text-zinc-700 gap-6 w-4/6 px-10 sm:px-0 mt-2">
        {historyContent &&
          historyContent.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-row justify-between w-full text-right leading-8">
                <p>{item[0]}</p>
                <p className="w-80 flex justify-end">{item[1]}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default History;
