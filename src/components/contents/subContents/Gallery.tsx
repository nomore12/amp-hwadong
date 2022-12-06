import React, { useEffect, useRef, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import { useAppDispatch, useAppSelector } from '../../../store/Hooks';
import { changeCurr, changeSubject, changeText } from '../../../store/Slice';
import * as Scroll from 'react-scroll';
import { animateScroll, Events } from 'react-scroll';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';
import arrow from 'src/static/images/logo.svg';
import Carousel from 'nuka-carousel';
import { ReactComponent as ArrowLeft } from 'src/static/images/arrow.svg';
import { ReactComponent as ArrowRight } from 'src/static/images/arrowRight.svg';
import useSubjectReplacer from '../../../hooks/SubjectReplacer';

interface PropsType {
  type: 'WCO' | 'ETC';
}

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

  .carousel-desc {
    margin-top: 2rem;
    text-align: end;
  }

  .slider-control-bottomcenter {
    //position: absolute;
    //bottom: 50px;

    ul {
      gap: 1rem;

      li {
        button {
          fill: white !important;
        }
      }
    }
  }

  .carousel-arrow-item {
    width: 24px;
    pointer-events: none;
    margin: 0 0.5rem;
    opacity: 0.7;

    @media screen and (max-width: 720px) {
      width: 16px;
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

const Gallery = ({ type }: PropsType) => {
  const state = useAppSelector((state) => state.cursor);
  const dispatch = useAppDispatch();
  const [desc, setDesc] = useState(imgArr[0].desc);
  const scroll = Scroll;
  const ref = useRef<HTMLDivElement | null>(null);
  // useSubjectReplacer({
  //   ref: ref,
  //   subject: type === 'WCO' ? 'WCO' : '기타목적사업',
  // });

  useEffect(() => {
    dispatch(changeCurr('archive'));
    dispatch(changeText('back'));
    dispatch(changeSubject(type === 'WCO' ? 'WCO' : '기타목적사업'));

    return () => {
      dispatch(changeCurr('main'));
      dispatch(changeText(''));
      dispatch(changeSubject('재단활동아카이브'));
    };
  }, []);

  const onChange = (index: number) => {
    setDesc(imgArr[index].desc);
  };
  return (
    <ContainerStyle ref={ref}>
      <div className={`carousel-item`}>
        <Carousel
          autoplay
          autoplayInterval={5000}
          pauseOnHover
          wrapAround
          afterSlide={onChange}
          // cellSpacing={20}
          className={`carousel-item`}
          renderCenterLeftControls={({ previousDisabled, previousSlide }) => (
            <button
              className=" carousel-item"
              onClick={previousSlide}
              disabled={previousDisabled}>
              <ArrowLeft
                className="carousel-item carousel-arrow-item"
                // width="16px"
                // style={{
                //   marginLeft: '16px',
                //   pointerEvents: 'none',
                //   opacity: '0.7',
                // }}
              />
            </button>
          )}
          renderCenterRightControls={({ nextDisabled, nextSlide }) => (
            <button
              className="carousel-item"
              onClick={nextSlide}
              disabled={nextDisabled}>
              <ArrowRight
                className="carousel-item carousel-arrow-item"
                // style={{
                //   marginRight: '16px',
                //   pointerEvents: 'none',
                //   opacity: '0.7',
                // }}
              />
            </button>
          )}>
          {imgArr &&
            imgArr.map((item, key) => {
              return (
                <div key={key} className={`carousel-item ${item.desc}`}>
                  <img src={item.img} className={`carousel-item`} />
                  {/*<p className={`carousel-item carousel-desc`}>{item.desc}</p>*/}
                </div>
              );
            })}
        </Carousel>
        <p style={{ marginTop: '2rem' }}>{desc}</p>
      </div>
    </ContainerStyle>
  );
};

export default Gallery;
