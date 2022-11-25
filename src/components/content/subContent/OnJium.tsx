import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../store/Hooks';
import useMouseEventHook from '../../../hooks/UseMouseEventHook';
import { changeCurr, changeSubject, changeText } from '../../../store/Slice';
import { animateScroll } from 'react-scroll';

const OnJium = () => {
  const dispatch = useAppDispatch();
  const { onMouseEnter, onMouseLeave, navigateToPage } = useMouseEventHook();

  useEffect(() => {
    dispatch(changeCurr('archive'));
    dispatch(changeText('back'));
    dispatch(changeSubject('온지음'));

    animateScroll.scrollTo(2950);

    return () => {
      dispatch(changeCurr('main'));
      dispatch(changeText(''));
      dispatch(changeSubject('재단활동소개'));
    };
  }, []);

  return (
    <div className="w-720 h-128 flex flex-row justify-end mt-48 mb-8 relative">
      <div className="w-480 flex flex-col items-end gap-6 text-sm text-zinc-700 px-10 sm:px-0">
        <p>
          {'"온 | 모두 온전하게", "지음 | 만들다, 이어가다, 뜻이 통하다"라는'}
        </p>
        <p>의미를 가지고 지난 2013년 6월 문을 연 전통문화연구소로,</p>
        <p>
          의/식/주 세 부분의 21세기형 장인 육성과 한국 전통 문화를 창조적으로
        </p>
        <p>
          계승하여 한국 문화를 알리는 대표 브랜드 생산을 목표로 하고 있습니다.
        </p>
        <a
          className="text-zinc-500 text-xs out-link"
          href="https://onjium.org/"
          target="_blank"
          rel="noreferrer">
          <div
            className="out-link"
            onMouseEnter={function (e) {
              onMouseEnter(e, 'LINK');
            }}
            onMouseLeave={onMouseLeave}>
            LINK
          </div>
        </a>
        <div className="flex flex-col w-full">
          <div className="flex flex-row justify-between items-center w-full">
            <p>옷공방</p>
            <p className="text-xs text-right text-zinc-500">
              전통복식/유물 재현/21세기 한복 연구, 전통복식사 교육, <br />
              전통복식 및 한복 현대화 관련 연구 용역 등
            </p>
          </div>
          <div className="flex flex-row justify-between items-center w-full mt-12">
            <p>맛공방</p>
            <p className="text-xs text-right text-zinc-500">
              고조리서 연구 및 한식 현대와 연구, 전통한식 및 조리이론 교육,
              <br />
              한식 레시피 및 조리 방법 소개 등
            </p>
          </div>
          <div className="flex flex-row justify-between items-center w-full mt-12">
            <p>집공방</p>
            <p className="text-xs text-right text-zinc-500">
              한식 구조와 재료 개발 연구, 한옥 및 건축 설계 교육,
              <br />
              한옥과 관련된 기획 연구 등
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnJium;
