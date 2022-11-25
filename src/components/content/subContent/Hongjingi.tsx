import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../store/Hooks';
import useMouseEventHook from '../../../hooks/UseMouseEventHook';
import { changeCurr, changeSubject, changeText } from '../../../store/Slice';
import { animateScroll } from 'react-scroll';

const Hongjingi = () => {
  const dispatch = useAppDispatch();
  const { onMouseEnter, onMouseLeave, navigateToPage } = useMouseEventHook();

  useEffect(() => {
    dispatch(changeCurr('hong'));
    dispatch(changeText('back'));
    dispatch(changeSubject('홍진기 창조인상'));

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
        <p className="text-right leading-8 w-full sm:w-128">
          대한민국 건국과 산업 발전기에 정부 · 기업 · 언론분야에서 활동하며
          창조적인 삶을 실천하는데 온 힘을 쏟았던 고(故) 유민 홍진기 전 중앙일보
          회장의 유지를 기리기 위해 제정되어 과학기술, 사회, 문화예술의 세
          분야에서 창의적인 업적을 이룩한 개인이나 단체를 대상으로 각 분야를
          대표하는 심사위원의 엄정한 심사를 거쳐 매년 수상자를 선정하고
          있습니다.
        </p>

        {/*<p>대한민국 건국과 산업 발전기에 정부 · 기업 · 언론분야에서 활동하며</p>*/}
        {/*<p>*/}
        {/*  창조적인 삶을 실천하는데 온 힘을 쏟았던 고(故) 유민 홍진기 전 중앙일보*/}
        {/*</p>*/}
        {/*<p>회장의 유지를 기리기 위해 제정되어 과학기술, 사회, 문화예술의</p>*/}
        {/*<p>세 분야에서 창의적인 업적을 이룩한 개인이나 단체를 대상으로</p>*/}
        {/*<p>각 분야를 대표하는 심사위원의 엄정한 심사를 거쳐</p>*/}
        {/*<p>매년 수상자를 선정하고 있습니다.</p>*/}
        <a
          className="text-zinc-500 text-xs out-link"
          href="https://www.yumin.org/hongjingi_award.html"
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
      </div>
    </div>
  );
};

export default Hongjingi;
