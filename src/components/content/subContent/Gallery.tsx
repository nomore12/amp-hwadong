import React, { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useAppDispatch, useAppSelector } from '../../../store/Hooks';
import { changeCurr, changeSubject, changeText } from '../../../store/Slice';
import { animateScroll } from 'react-scroll';
import { isMobile } from 'react-device-detect';

const imgArr = [
  {
    img: 'https://images.unsplash.com/photo-1664362597715-d6089e55ae89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80',
    desc: 'first',
  },
  {
    img: 'https://images.unsplash.com/photo-1664380619406-49883ee01a55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2338&q=80',
    desc: 'second',
  },
  {
    img: 'https://images.unsplash.com/photo-1664388519483-9fdcbdba13a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    desc: 'third',
  },
];

const Gallery = () => {
  const state = useAppSelector((state) => state.cursor);
  const dispatch = useAppDispatch();
  const [desc, setDesc] = useState(imgArr[0].desc);

  useEffect(() => {
    dispatch(changeCurr('archive'));
    dispatch(changeText('back'));
    dispatch(changeSubject('갤러리'));

    animateScroll.scrollTo(3720);

    return () => {
      dispatch(changeCurr('main'));
      dispatch(changeText(''));
      dispatch(changeSubject('아카이브'));
    };
  }, []);

  const onChange = (index: number, item: React.ReactNode) => {
    setDesc(imgArr[index].desc);
  };

  return (
    <div className="w-720 h-128 flex flex-row justify-between items-start mt-48 mb-8 relative">
      <div className="text-lg tracking-widest text-zinc-900"></div>
      <div className="">
        <Carousel
          className="pt-12"
          width="560px"
          showStatus={false}
          showThumbs={false}
          autoPlay
          infiniteLoop
          interval={5000}
          onChange={onChange}>
          {imgArr &&
            imgArr.map((item, key) => {
              return (
                <div key={key} className={`carousel-item ${item.desc}`}>
                  <img src={item.img} />
                </div>
              );
            })}
        </Carousel>
        <p className="mt-8 text-sm text-stone-800">{desc}</p>
      </div>
    </div>
  );
};

export default Gallery;
