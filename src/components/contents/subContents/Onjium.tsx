import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../store/Hooks';
import useMouseEventHook from '../../../hooks/UseMouseEventHook';
import { changeCurr, changeSubject, changeText } from '../../../store/Slice';
import { animateScroll } from 'react-scroll';
import styled from 'styled-components';
import imgLink1 from 'src/components/assets/images/onjium01.png';
import imgLink2 from 'src/components/assets/images/onjium02.png';
import imgLink3 from 'src/components/assets/images/onjium03.jpeg';
import horizImage from 'src/components/assets/images/onjium.png';
import { isMobile } from 'react-device-detect';

const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 160px;

  .onjium-desc {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    p {
      color: rgba(39, 39, 42, 0.8);
      font-size: 0.9rem;
    }
  }

  a {
    padding: 1rem 0;
    color: rgba(39, 39, 42, 0.8);
  }

  .onjium-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-top: 2rem;
  }

  .onjium-content-item {
    display: flex;
    justify-content: space-between;

    p {
      font-size: 0.9rem;
    }

    .content-item__desc {
      font-size: 0.8rem;
    }
  }

  .onjium-link {
    width: 6rem;
    align-self: flex-end;
  }

  .onjium-img-container {
    //padding: 1rem 0;
    //display: flex;
    //justify-content: flex-end;
    //flex-wrap: wrap;
    //gap: 1rem;
    //display: none;
    margin-top: 3rem;

    @media screen and (max-width: 1024px) {
      display: flex;
    }
  }
`;

const OnJium = () => {
  const dispatch = useAppDispatch();
  const { onMouseEnter, onMouseLeave, navigateToPage } = useMouseEventHook();
  const mobileView = isMobile;

  const eventListener = () => {
    dispatch(changeCurr('archive'));
    dispatch(changeText('back'));
    dispatch(changeSubject('온지음'));
  };

  // 이상하게 백버튼이 활성화되지 않고 있음.
  useEffect(() => {
    dispatch(changeCurr('archive'));
    dispatch(changeText('back'));
    dispatch(changeSubject('온지음'));

    window.addEventListener('focus', eventListener);

    return () => {
      dispatch(changeCurr('main'));
      dispatch(changeText(''));
      dispatch(changeSubject('재단활동소개'));
      window.removeEventListener('focus', eventListener);
    };
  }, []);

  return (
    <ContainerStyle>
      <div className="onjium-desc">
        {mobileView ? (
          <p style={{ lineHeight: '2rem' }}>
            {
              '"온 | 모두 온전하게", "지음 | 만들다, 이어가다, 뜻이 통하다"라는 의미를 가지고 지난 2013년 6월 문을 연 전통문화연구소로, 의/식/주 세 부분의 21세기형 장인 육성과 한국 전통 문화를 창조적으로 계승하여 한국 문화를 알리는 대표 브랜드 생산을 목표로 하고 있습니다.'
            }
          </p>
        ) : (
          <>
            <p>
              {
                '"온 | 모두 온전하게", "지음 | 만들다, 이어가다, 뜻이 통하다"라는'
              }
            </p>
            <p>의미를 가지고 지난 2013년 6월 문을 연 전통문화연구소로,</p>
            <p>의/식/주 세 부분의 21세기형 장인 육성과 한국 전통 문화를</p>
            <p>창조적으로 계승하여 한국 문화를 알리는</p>
            <p>대표 브랜드 생산을 목표로 하고 있습니다.</p>
          </>
        )}
      </div>
      <a
        className="onjium-link"
        href="https://onjium.org/"
        target="_blank"
        rel="noreferrer">
        <div
          className="link"
          onMouseEnter={function (e) {
            onMouseEnter(e, 'LINK');
          }}
          onMouseLeave={(e) => onMouseLeave(e, 'back')}>
          LINK
        </div>
      </a>
      <div className="onjium-content">
        <div className="onjium-content-item">
          <p>옷공방</p>
          <p className="content-item__desc">
            전통복식/유물 재현/21세기 한복 연구, 전통복식사 교육, <br />
            전통복식 및 한복 현대화 관련 연구 용역 등
          </p>
        </div>
        <div className="onjium-content-item">
          <p>맛공방</p>
          <p className="content-item__desc">
            고조리서 연구 및 한식 현대와 연구, 전통한식 및
            <br />
            조리이론 교육, 한식 레시피 및 조리 방법 소개 등
          </p>
        </div>
        <div className="onjium-content-item">
          <p>집공방</p>
          <p className="content-item__desc">
            한식 구조와 재료 개발 연구, 한옥 및 건축 설계 교육,
            <br />
            한옥과 관련된 기획 연구 등
          </p>
        </div>
      </div>
      <div className="onjium-img-container">
        <img src={horizImage} />
      </div>
    </ContainerStyle>
  );
};

export default OnJium;
