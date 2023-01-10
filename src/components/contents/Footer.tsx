import React from 'react';
import styled from 'styled-components';
import logo1 from '../assets/images/logo-1.png';
import logo2 from '../assets/images/logo-2.png';

interface PropsType {}

const ContainerStyle = styled.footer`
  display: flex;
  justify-content: space-between;
  width: calc(100% - 450px - 4rem);
  padding: 1rem 0 1.3rem 0;
  margin-right: 4rem;
  position: absolute;
  bottom: 0;
  border-top: 1px solid rgba(39, 39, 42, 0.6);
  height: 263px;

  @media screen and (max-width: 1024px) {
    display: none;
  }

  .footer-left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .footer-left__subject {
      color: rgba(39, 39, 42, 0.8);
      font-size: 0.9rem;
    }

    .footer-left__logowrapper {
      display: flex;
      justify-content: space-between;
    }
  }

  .footer-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;

    p {
      color: rgba(39, 39, 42, 0.7);
      font-size: 0.9rem;
      text-align: end;
    }
  }
`;

const Footer = () => {
  return (
    <ContainerStyle>
      <div className="footer-left">
        <div className="footer-left__subject">이용약관 | 개인정보취급방침</div>
        <div className="footer-left__logowrapper">
          <div>
            <a
              href="https://www.nts.go.kr/nts/main.do"
              target="_blank"
              rel="noreferrer">
              <img src={logo1} alt="logo" width="100px" />
            </a>
          </div>
          <div className="ml-20">
            <a href="https://www.acrc.go.kr/" target="_blank" rel="noreferrer">
              <img src={logo2} alt="logo" width="200px" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-right">
        <p>이사장 | 홍 석 현</p>
        <p>사업자등록번호 | 104 - 82 - 10204</p>
        <p>대표번호 | 02 - 751 - 9898</p>
        <p>이메일 | hwadongcf@naver.com</p>
        <p>주소 | 서울특별시 중구 칠패로 37</p>
        <p>COPYRIGHT (C) 2022 KSA ALL RIGHTS RESERVED.</p>
      </div>
    </ContainerStyle>
  );
};

export default Footer;
