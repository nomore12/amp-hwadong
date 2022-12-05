import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../store/Hooks';
import useMouseEventHook from '../../../hooks/UseMouseEventHook';
import { changeCurr, changeSubject, changeText } from '../../../store/Slice';
import { animateScroll } from 'react-scroll';
import styled from 'styled-components';
import hongUrl from 'src/components/assets/images/hong.png';
import { isMobile } from 'react-device-detect';

const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 160px;
  padding-bottom: 230px;
  height: 100%;

  .onjium-desc {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    p {
      color: rgba(39, 39, 42, 0.8);
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

  .hong-img {
    //position: absolute;
    //bottom: 100px;
    //right: 128px;
    //width: calc(100vw - 300px);
    //bottom: 200px;
    //width: 100%;
    display: none;

    @media screen and (max-width: 1024px) {
      display: flex;
    }
  }

  .mobile-p {
    text-align: start;
  }
`;

const Hong = () => {
  const dispatch = useAppDispatch();
  const { onMouseEnter, onMouseLeave, navigateToPage } = useMouseEventHook();
  const eventListener = () => {
    dispatch(changeCurr('archive'));
    dispatch(changeText('back'));
    dispatch(changeSubject('홍진기 창조인상'));
  };

  useEffect(() => {
    dispatch(changeCurr('archive'));
    dispatch(changeText('back'));
    dispatch(changeSubject('홍진기 창조인상'));

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
        {isMobile ? (
          <>
            <p className="mobile-p">
              대한민국 건국과 산업 발전기에 정부 · 기업 · 언론분야에서 활동하며
              창조적인 삶을 실천하는데 온 힘을 쏟았던 고(故) 유민 홍진기 전
              중앙일보 회장의 유지를 기리기 위해 제정되어 과학기술, 사회,
              문화예술의 세 분야에서창의적인 업적을 이룩한 개인이나 단체를
              대상으로 각 분야를 대표하는 심사위원의 엄정한 심사를 거쳐 매년
              수상자를 선정하고 있습니다.
            </p>
            <p></p>
          </>
        ) : (
          <>
            <p>대한민국 건국과 산업 발전기에</p>
            <p>
              정부 · 기업 · 언론분야에서 활동하며 창조적인 삶을 실천하는데 온
              힘을 쏟았던
            </p>
            <p>
              고(故) 유민 홍진기 전 중앙일보 회장의 유지를 기리기 위해 제정되어
            </p>
            <p>과학기술, 사회, 문화예술의 세 분야에서</p>
            <p>창의적인 업적을 이룩한 개인이나 단체를 대상으로</p>
            <p>
              각 분야를 대표하는 심사위원의 엄정한 심사를 거쳐 매년 수상자를
              선정하고 있습니다.
            </p>
          </>
        )}
        <a
          className="hong-link"
          href="https://www.yumin.org/hongjingi_award.html"
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
        <div className="hong-img">
          <img src={hongUrl} />
        </div>
      </div>
    </ContainerStyle>
  );
};

export default Hong;
