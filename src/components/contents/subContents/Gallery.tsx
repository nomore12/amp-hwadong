import React, { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useAppDispatch, useAppSelector } from '../../../store/Hooks';
import { changeCurr, changeSubject, changeText } from '../../../store/Slice';
import * as Scroll from 'react-scroll';
import { animateScroll, Events } from 'react-scroll';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';
import arrow from 'src/static/images/logo.svg';

const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 780px;
  padding-top: 200px;

  .gallery-carousel {
    width: 100%;
    margin-bottom: 2rem;

    @media screen and (max-width: 768px) {
      //width: 80%;
    }

    .control-arrow,
    .control-prev {
      &:hover {
        background: transparent;
      }
    }

    .carousel .control-prev.control-arrow:before {
      border-right: 8px solid #fff;
      //background: black;
      //background: url(../../../static/images/logo.svg);
    }

    .carousel .control-arrow:before,
    .carousel.carousel-slider .control-arrow:before {
      // arrow
      //background: black;
    }

    .control-arrow::before {
      //background: black;
    }
  }
`;

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
  const scroll = Scroll;

  useEffect(() => {
    dispatch(changeCurr('archive'));
    dispatch(changeText('back'));
    dispatch(changeSubject('갤러리'));

    const arrow = document.querySelector('.control-arrow');
    // const elem = document.createElement('div');
    // elem.innerHTML = 'dd';
    // arrow ? arrow.insertBefore(elem, null) : null;
    // arrow.
    // arrow ? arrow.before(elem) : null;

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
    <ContainerStyle>
      <div className="">
        <Carousel
          className="gallery-carousel"
          // width="300px"
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
        <p>{desc}</p>
      </div>
    </ContainerStyle>
  );
};

export default Gallery;
