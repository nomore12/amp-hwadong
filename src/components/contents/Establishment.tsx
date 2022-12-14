import React, { useRef } from 'react';
import styled from 'styled-components';
import useSubjectReplacer from '../../hooks/SubjectReplacer';
import { isMobile } from 'react-device-detect';

interface PropsType {}

const ContainerStyle = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-end;
  font-size: 0.9rem;
  font-weight: 400;
  //width: 480px;
  line-height: 2.5rem;

  p {
    //color: rgba(39, 39, 42, 0.8);
    margin: 0;
    word-break: keep-all;
    text-align: start;
  }
`;

const Establishment = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  useSubjectReplacer({ ref: ref, subject: '설립목적' });

  return (
    <ContainerStyle ref={ref}>
      {isMobile ? (
        <>
          <p>
            재단법인 중앙화동재단은 「민법」 , 「문화체육관광부 및 문화재청소관
            비영리법인 설립 및 감독에 관한 규칙」 및 「공익법인의 설립·운영에
            관한 법률」에 의해 설립된 문화체육관광부 소관의 비영리공익법인으로,
            문화, 종교, 언론 발전을 위한 연구, 실천 사업과 관련 단체에 대한
            지원을 목적으로 공익사업을 운영하고 있습니다
          </p>
        </>
      ) : (
        <>
          <span>재단법인 중앙화동재단은</span>
          <span>
            「민법」 , 「문화체육관광부 및 문화재청소관 비영리법인 설립 및
            감독에 관한 규칙」
          </span>
          <span>및 「공익법인의 설립·운영에 관한 법률」에 의해 설립된</span>
          <span>문화체육관광부 소관의 비영리공익법인으로,</span>
          <span>문화, 종교, 언론 발전을 위한 연구, 실천 사업과</span>
          <span>관련 단체에 대한 지원을 목적으로</span>
          <span>공익사업을 운영하고 있습니다</span>
        </>
      )}
    </ContainerStyle>
  );
};

export default Establishment;
