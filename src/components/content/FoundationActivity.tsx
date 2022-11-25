import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import useSubjectReplacer from 'src/hooks/SubjectReplacer';
import useMouseEventHook from '../../hooks/UseMouseEventHook';

const FoundationActivity = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  useSubjectReplacer({ ref: ref, subject: '재단활동소개' });
  const { onMouseEnter, onMouseLeave, navigateToPage } = useMouseEventHook();

  return (
    <div ref={ref} className="w-720 h-128 flex flex-row justify-end mt-48 mb-8">
      <div className="flex flex-col items-end gap-3 text-sm text-zinc-700 px-10 sm:px-0">
        <p className="relative">
          [전통문화연구소ㅣ 온지음]
          <div
            className="w-44 h-7 -top-1 -left-3 absolute"
            onMouseMove={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onMouseUp={function () {
              navigateToPage('/main/onjium');
            }}
          />
        </p>
        <p className="font-thin text-xs">
          ‘과거와 현재가 온전히 만나 미래를 짓다’
        </p>
        <p className="font-thin text-xs">
          우리 전통 문화에 담긴 가치와 정신을 계승하고 이를
        </p>
        <p className="font-thin text-xs">
          현대화하여 올바른 내일의 유산을 연구합니다.
        </p>
        <p className="mt-12 relative">
          [홍진기 창조인상]
          <div
            className="w-32 h-7 -top-1 -left-3 absolute"
            onMouseMove={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onMouseUp={function () {
              navigateToPage('/main/hong');
            }}
          />
        </p>
        <p className="font-thin text-xs">
          ‘혁신적인 창조력의 가치를 믿고 지원하다’
        </p>
        <p className="font-thin text-xs">
          고(故) 유민 홍진기 전 중앙일보 회장의 유지를 받들어,
        </p>
        <p className="font-thin text-xs">
          과학기술/사회/ 문화예술 세 분야의 창의적인 업적을 이룬 수상자를
          선정합니다.
        </p>

        <p></p>
      </div>
    </div>
  );
};

export default FoundationActivity;
