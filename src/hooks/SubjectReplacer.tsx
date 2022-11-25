import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/store/Hooks';
import { changeSubject } from 'src/store/Slice';

interface PropsType {
  ref: React.MutableRefObject<HTMLDivElement | HTMLUListElement | null>;
  subject: string;
}

const useSubjectReplacer = ({ ref, subject }: PropsType) => {
  const currentSubject = useAppSelector((state) => state.subject);
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      const currentPosition = ref?.current
        ? ref.current.getBoundingClientRect().y
        : -1;
      if (currentPosition < window.innerHeight / 2 && currentPosition >= 0) {
        dispatch(changeSubject(subject));
      }
    });
  });

  // return current;
};

export default useSubjectReplacer;
