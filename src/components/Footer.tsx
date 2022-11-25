import React from 'react';
import logo1 from 'src/components/assets/images/logo-1.png';
import logo2 from 'src/components/assets/images/logo-2.png';

const Footer = () => {
  return (
    <footer
      className="w-[calc(100vw-9rem-360px)] py-4 flex flex-col-reverse xl:flex-row justify-between h-48"
      // className="w-screen md:w-[calc(100vw-9rem-360px)] py-4 flex flex-col-reverse xl:flex-row justify-between h-48 lg:mx-0 absolute bottom-0 -right-20"
      style={{ borderTop: '1px solid rgb(113 113 122)', height: '275px' }}>
      <div className="flex flex-col justify-between h-full">
        <div className="text-xs text-zinc-700 hidden xl:block">
          이용약관 | 개인정보취급방침
        </div>
        <div className="flex flex-row pb-5">
          <div>
            <img src={logo1} width="100px" />
          </div>
          <div className="ml-20">
            <img src={logo2} width="200px" />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between h-full py-6 items-end text-xxs sm:text-xs text-zinc-700">
        <div>대표 | 홍 석 현</div>
        <div>사업자등록번호 | 104 - 82 - 10204</div>
        <div>대표번호 | 02 - 751 - 9898</div>
        <div>이메일 | hwadongcf@naver.com</div>
        <div>주소 | 서울특별시 중구 서소문로 100</div>
        <div>COPYRIGHT (C) 2022 KSA ALL RIGHTS RESERVED.</div>
      </div>
      <div className="text-xs text-zinc-700 xl:hidden">
        이용약관 | 개인정보취급방침
      </div>
    </footer>
  );
};

export default Footer;
