import React, { useRef } from 'react';
import map from 'src/components/assets/images/map.png';
import addressMap from 'src/components/assets/images/map-address.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import instagram from 'src/components/assets/images/instagram.png';
import { ReactComponent as Instagram } from 'src/components/assets/images/icons8-instagram-100.svg';
import useSubjectReplacer from 'src/hooks/SubjectReplacer';
import useMouseEventHook from '../../hooks/UseMouseEventHook';

const Contact = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  useSubjectReplacer({ ref: ref, subject: '위치 및 연락처' });
  const { onMouseEnter, onMouseLeave } = useMouseEventHook();

  return (
    <div ref={ref} className="w-720 h-128 flex flex-row justify-end mt-48 mb-8">
      <div className="w-3/5 sm:w-600 flex flex-col items-end gap-2 text-sm text-zinc-700 px-10 sm:px-0 pt-12">
        <img src={addressMap} className="location-img" width="100%" />
        <span className="pt-6">
          <Instagram width="36px" height="36px" />
        </span>
        <div className="flex flex-col items-end text-sm font-thin gap-1 pt-2">
          <p>
            <span className="font-extralight">tel</span> | 02. 751. 9898
          </p>
          <p>
            <span className="font-extralight">fax</span> | 02. 751. 9894
          </p>
          <a href="mailto:nightwing@naver.com">
            <span className="mail-to font-extralight">email</span> |
            <span
              onMouseEnter={function (e) {
                onMouseEnter(e, 'email');
              }}
              onMouseLeave={function (e) {
                onMouseLeave(e);
              }}>
              hwadongcf@naver.com
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
