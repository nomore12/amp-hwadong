import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import useSubjectReplacer from 'src/hooks/SubjectReplacer';
import useMouseEventHook from 'src/hooks/UseMouseEventHook';

const Archive = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { onMouseEnter, onMouseLeave, navigateToPage } = useMouseEventHook();
  useSubjectReplacer({ ref: ref, subject: '재단활동아카이브' });

  return (
    <div ref={ref} className="w-720 h-128 flex flex-row justify-end mt-48 mb-8">
      <div className="flex flex-col items-end gap-3 text-sm text-zinc-700 px-10 sm:px-0">
        <Link to="/main/gallery">
          <p className="relative">
            갤러리
            <div
              className="w-16 h-7 -top-1 -left-3 absolute"
              onMouseMove={onMouseEnter}
              onMouseLeave={onMouseLeave}
              onMouseUp={function () {
                navigateToPage('/main/gallery');
              }}
            />
          </p>
        </Link>
        <p className="font-thin text-xs">
          재단법인 화동문화재단의 지나온 활동과 관련 아카이브리
        </p>
        <p className="mt-12 relative">
          세계문화오픈 | WCO
          <div
            className="w-36 h-7 -top-1 -left-3 absolute"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onMouseUp={function () {
              navigateToPage('/main/gallery');
            }}
          />
        </p>
        <p className="font-thin text-xs">
          ‘더불어 행복한 세상’을 실현하기 위해 문화의 세계화,
        </p>
        <p className="font-thin text-xs">
          미래화에 대비하고 다문화 열린 사회의 문화적 터전 마련에 기여하기 위한
        </p>
        <p className="font-thin text-xs">
          학문적 연구 및 문화 행사를 실천합니다.
        </p>
        <p className="font-thin text-xs"></p>
        <p className="mt-12 relative">
          기타 목적 사업
          <div
            className="w-28 h-7 -top-1 -left-3 absolute"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onMouseUp={function () {
              navigateToPage('/main/gallery');
            }}
          />
        </p>
        <p className="font-thin text-xs">
          주요 사업 이외에도 헤리티지 투모로우, 정자나무 가꾸기,
        </p>
        <p className="font-thin text-xs">
          장학금 및 학술연구, 종교지원단체 등의 다양한 목적 사업을 진행하고
          있습니다.
        </p>
        <p></p>
      </div>
    </div>
  );
};

export default Archive;
