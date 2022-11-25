import React, { useEffect, useRef } from 'react';
import useSubjectReplacer from '../../hooks/SubjectReplacer';
import { useAppDispatch, useAppSelector } from '../../store/Hooks';
import { changeSubject } from '../../store/Slice';

const businessContent = [
  { main: '문화, 종교, 언론 발전을 위한 장학사업', sub: null },
  {
    main: '문화, 종교, 언론 발전을 위한 학문의 연구, 조사, 개발, 보급',
    sub: null,
  },
  {
    main: '문화, 종교, 언론 발전을 위한 학문적 연구 및 관련 행사 실천',
    sub: null,
  },

  {
    main: '교육, 연구, 연수, 세미나, 행사 등 실천사업',
    sub: [
      '혁신적인 창의성을 바탕으로 새로운 성과와 가치를 일구어낸 개인이나 단체 시상',
      '문화 체험 프로그램 개발 및 운영',
      '문화, 예술 경연, 공연을 통한 예술창작 및 표현활동 촉진사업',
    ],
  },

  {
    main: '세계 문화 교류 및 발전을 위한 사업',
    sub: [
      '세계 문화 교류 및 발전 촉진 사업',
      '세계 문화 관련 도서 및 정기간행물 발간',
    ],
  },

  {
    main: '의식주를 중심으로 한 전통문화 계승·발전 사업',
    sub: [
      '전통의식주 보급 및 체험활동을 위한 서비스',
      '전통의식주 보존 및 활용을 위한 연구 및 개발',
      '전통의식주 관련 상품 연구, 제조',
      '전통의식주 관련 소개 도서 출판',
    ],
  },
];
const BusinessContent = () => {
  const content = useRef<HTMLDivElement | null>(null);
  useSubjectReplacer({ ref: content, subject: '사업내용' });
  const subject = useAppSelector((state) => state.subject);
  const dispatch = useAppDispatch();

  return (
    <div
      id="businessContent"
      ref={content}
      className="w-720 h-128 flex flex-row justify-end px-10 sm:px-0 mt-48 mb-8">
      <div className="flex flex-col items-end gap-8 text-sm text-zinc-700 ">
        {businessContent &&
          businessContent.map((item, index) => {
            return (
              <div key={index} className="flex flex-col">
                <div className="flex flex-col items-end gap-1">
                  <div>{`${item.main}`}</div>
                  {item.sub &&
                    item.sub.map((item, index) => {
                      return (
                        <div key={index} className="text-xs text-zinc-500">
                          {item}
                        </div>
                      );
                    })}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default BusinessContent;
