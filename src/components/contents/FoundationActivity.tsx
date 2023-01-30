import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import useSubjectReplacer from '../../hooks/SubjectReplacer';
import useMouseEventHook from '../../hooks/UseMouseEventHook';
import { changeCurr, changeSubject, changeText } from '../../store/Slice';
import { isMobile } from 'react-device-detect';

interface PropsType {}

const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 720px) {
    align-items: flex-start;
  }

  .activity-item__subject {
    color: rgba(39, 39, 42, 0.8);
    font-size: 0.9rem;
    margin-top: 2rem;
    padding-bottom: 12px;
    font-weight: 500;

    &:first-child {
      margin-top: 0;
    }
  }

  .activity-item__desc {
    color: rgba(39, 39, 42, 0.6);
    font-size: 0.8rem;
    padding: 4px 0;

    @media screen and (max-width: 720px) {
      text-align: start;
    }
  }
`;

const FoundationActivity = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  useSubjectReplacer({ ref: ref, subject: '재단활동소개' });
  const { onMouseEnter, onMouseLeave, navigateToPage } = useMouseEventHook();
  const [currPosition, setCurrPosition] = useState(0);
  const mobileView = isMobile;

  return (
    <ContainerStyle className="activity" ref={ref}>
      <p
        className="activity-item__subject"
        onMouseMove={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onMouseUp={() => {
          localStorage.setItem(
            'curr',
            String(document.documentElement.scrollTop)
          );
          navigateToPage('/main/onjium');
        }}>
        전통문화연구소ㅣ 온지음
      </p>
      <p className="activity-item__desc">
        ‘과거와 현재가 온전히 만나 미래를 짓다’
      </p>
      <p className="activity-item__desc">
        우리 전통 문화에 담긴 가치와 정신을 계승하고
      </p>
      <p className="activity-item__desc">
        이를 현대화하여 올바른 내일의 유산을 연구합니다.
      </p>
      <p
        className="activity-item__subject"
        onMouseMove={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onMouseUp={() => {
          localStorage.setItem(
            'curr',
            String(document.documentElement.scrollTop)
          );
          navigateToPage('/main/hong');
        }}>
        홍진기 창조인상
      </p>

      {mobileView ? (
        <div>
          <p className="activity-item__desc">
            ‘혁신적인 창조력의 가치를 믿고 지원하다’
          </p>
          <p className="activity-item__desc">
            고(故) 유민 홍진기 전 중앙일보 회장의 유지를 받들어,
          </p>
          <p className="activity-item__desc">
            과학기술/사회/ 문화예술 세 분야의 창의적인 업적을 이룬
          </p>
          <p className="activity-item__desc">수상자를 선정합니다.</p>
        </div>
      ) : (
        <div>
          <p className="activity-item__desc">
            ‘혁신적인 창조력의 가치를 믿고 지원하다’
          </p>
          <p className="activity-item__desc">
            고(故) 유민 홍진기 전 중앙일보 회장의 유지를 받들어,
          </p>
          <p className="activity-item__desc">
            과학기술/사회/ 문화예술 세 분야의 창의적인 업적을 이룬 수상자를
            선정합니다.
          </p>
        </div>
      )}
      {/*<div>*/}
      {/*  <p className="activity-item__desc">*/}
      {/*    과학기술/사회/ 문화예술 세 분야의 창의적인 업적을 이룬 수상자를*/}
      {/*    선정합니다.*/}
      {/*  </p>*/}
      {/*</div>*/}
    </ContainerStyle>
  );
};

export default FoundationActivity;
