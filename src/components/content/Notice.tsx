import React, { useRef } from 'react';
import useSubjectReplacer from 'src/hooks/SubjectReplacer';

interface PropsType {
  children: React.ReactNode;
}

const Notice = ({ children }: PropsType) => {
  const ref = useRef<HTMLDivElement | null>(null);
  useSubjectReplacer({ ref: ref, subject: '공지사항' });

  return (
    <div
      ref={ref}
      className="sm:w-720 h-128 flex flex-row justify-end mt-48 mb-8 relative">
      <div className="flex flex-col items-end gap-8 text-sm text-zinc-700 w-4/5 px-10 sm:px-0">
        {children}
      </div>
    </div>
  );
};

export default Notice;
