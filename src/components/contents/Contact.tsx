import React, { useRef } from 'react';
import styled from 'styled-components';
import map from 'src/components/assets/images/map.png';
import { isMobile } from 'react-device-detect';
import { ReactComponent as Instagram } from 'src/components/assets/images/icons8-instagram-100.svg';
import useSubjectReplacer from '../../hooks/SubjectReplacer';
import useMouseEventHook from '../../hooks/UseMouseEventHook';

interface PropsType {}

const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;

  .contact__inner {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .contact__inner--content {
      font-weight: 300;
    }

    .contact__inner--thin {
      font-weight: 400;
    }
  }
`;

const Contact = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  useSubjectReplacer({ ref: ref, subject: '위치 및 연락처' });
  const { onMouseEnter, onMouseLeave } = useMouseEventHook();
  const isMobileDevice = isMobile;

  return (
    <ContainerStyle ref={ref}>
      <img src={map} alt="map" width={`${isMobileDevice ? '600px' : '100%'}`} />
      <Instagram width="28px" height="28px" />
      <div className="contact__inner">
        <a className="contact__inner--content" href="tel:02-751-9894">
          <span className="contact__inner--thin">tel | </span>02. 751. 9898
        </a>
        <p className="contact__inner--content">
          <span className="contact__inner--thin">fax | </span>02. 751. 9894
        </p>
        <a
          href="mailto:nightwing@naver.com"
          className="contact__inner--content">
          <span className="contact__inner--thin">email | </span>
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
    </ContainerStyle>
  );
};

export default Contact;
