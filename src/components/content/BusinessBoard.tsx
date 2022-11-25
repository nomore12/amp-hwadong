import React, { useEffect } from 'react';
import { Routes, Route, useParams, Link } from 'react-router-dom';

const TestRow = () => {
  return (
    <Link to="/main/report/1">
      <div className="flex justify-between pt-1">
        <div className="">0</div>
        <div className="basis-8/12 flex justify-start">
          <p className="w-360 px-2 py-0.5 truncate ...">
            홈페이지 오픈 준비중입니다. 홈페이지 오픈 준비중입니다.홈페이지 오픈
            준비중입니다.홈페이지 오픈 준비중입니다. 준비중입니다.홈페이지 오픈
            준비중입니다.
          </p>
        </div>
        <div>2021.07.28</div>
      </div>
    </Link>
  );
};

const nums = [1, 2, 3, 4, 5, 6, 7];

const BusinessBoard = () => {
  const params = useParams();

  return (
    <div className="flex flex-col w-auto lg:w-full gap-1 divide-y divide-solid divide-zinc-400 w-full text-zinc-700 font-extralight text-sm ">
      <div></div>
      {nums.map((item, index) => (
        <TestRow key={index} />
      ))}
      <div></div>
    </div>
  );
};

export default BusinessBoard;
