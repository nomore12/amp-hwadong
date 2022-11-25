import React, { useRef } from 'react';
import useSubjectReplacer from 'src/hooks/SubjectReplacer';

const Establishment = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  useSubjectReplacer({ ref: ref, subject: '설립목적' });

  return (
    <div ref={ref} className="w-720 h-128 flex flex-row justify-end mt-48 mb-8">
      <div className="flex flex-col items-end gap-8 text-sm text-zinc-700 px-10 sm:px-0">
        <p>재단법인 중앙화동재단은</p>
        <p>「민법」 및 「문화체육관광부 및</p>
        <p>감독에 관한 규칙」에 의해 설립된 비영리법인으로,</p>
        <p>「공익법인의 설립·운영에 관한 법률」의 규정에 따라</p>
        <p>문화, 종교, 언론 발전을 위한 연구,</p>
        <p>
          실천 사업과 관련 단체에 대한 지원을 목적으로 공익사업을 운영하고
          있습니다.
        </p>
      </div>
    </div>
  );
};

export default Establishment;
