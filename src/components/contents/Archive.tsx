import React, { useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import useSubjectReplacer from '../../hooks/SubjectReplacer';
import useMouseEventHook from '../../hooks/UseMouseEventHook';

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

    &:first-child {
      margin-top: 0;
    }
  }

  .activity-item__desc {
    color: rgba(39, 39, 42, 0.6);
    font-size: 0.8rem;
    padding: 4px 0;
  }

  .mobile-subject {
    display: none;

    @media screen and (max-width: 1024px) {
      display: block;
    }
  }
`;

const Archive = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  useSubjectReplacer({ ref: ref, subject: '재단활동아카이브' });
  const { onMouseEnter, onMouseLeave, navigateToPage } = useMouseEventHook();

  const memorizeScroll = (url: string) => {
    localStorage.setItem('curr', String(document.documentElement.scrollTop));
    navigateToPage(url);
  };

  return (
    <ContainerStyle ref={ref} className="activity">
      <p
        className="activity-item__subject"
        onMouseMove={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onMouseUp={() => {
          memorizeScroll('/main/wco');
        }}>
        세계문화오픈 | WCO
      </p>
      {/*<p className="activity-item__desc">*/}
      {/*  ‘더불어 행복한 세상’을 실현하기 위해 문화의 세계화,*/}
      {/*</p>*/}
      {/*<p className="activity-item__desc">*/}
      {/*  미래화에 대비하고 다문화 열린 사회의 문화적 터전 마련에 기여하기 위한*/}
      {/*</p>*/}
      {/*<p className="activity-item__desc">*/}
      {/*  학문적 연구 및 문화 행사를 실천합니다.*/}
      {/*</p>*/}
      <p className="activity-item__desc">
        ‘더불어 행복한 세상’을 실현하기 위해
      </p>
      <p className="activity-item__desc">문화의 세계화, 미래화에 대비하고</p>
      <p className="activity-item__desc">
        다문화 열린 사회의 문화적 터전 마련에 기여하기 위한
      </p>
      <p className="activity-item__desc">
        학문적 연구 및 문화 행사를 실천합니다.
      </p>

      {/* ----------------------------------------------------- */}
      <p
        className="activity-item__subject"
        onMouseMove={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onMouseUp={() => {
          memorizeScroll('/main/etc');
        }}>
        기타 목적 사업
      </p>
      {/*<p className="activity-item__desc">*/}
      {/*  주요 사업 이외에도 헤리티지 투모로우, 정자나무 가꾸기,*/}
      {/*</p>*/}
      {/*<p className="activity-item__desc">*/}
      {/*  장학금 및 학술연구, 종교지원단체 등의 다양한 목적 사업을 진행하고*/}
      {/*  있습니다.*/}
      {/*</p>*/}

      <p className="activity-item__desc">주요 사업 이외에도</p>
      <p className="activity-item__desc">
        헤리티지 투모로우, 정자나무 가꾸기, 장학사업 및 학술연구, 종교지원단체
        등의
      </p>
      <p className="activity-item__desc">
        다양한 목적 사업을 진행하고 있습니다.
      </p>
    </ContainerStyle>
  );
};

export default Archive;
