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
import useSubjectReplacer from 'src/hooks/SubjectReplacer';
import useMouseEventHook from 'src/hooks/UseMouseEventHook';
import { API, Storage } from 'aws-amplify';
import { listImagePosts } from '../../../graphql/queries';

interface PropsType {
  type: 'WCO' | 'ETC';
}

const CarouselStyle = styled(Carousel)``;

const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 780px;
  padding-top: 200px;

  .gallery-subject {
    display: none;

    @media screen and (max-width: 720px) {
      display: block;
      margin-bottom: 1rem;
      padding-left: 2px;
      text-align: start;
    }
  }

  .gallery-carousel {
    width: 100%;
    margin-bottom: 2rem;

    @media screen and (max-width: 768px) {
      //width: 80%;
    }

    .carousel-container {
      width: 640px !important;
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

  .carousel-img-slide {
    height: 420px;
  }

  //img {
  //  width: 100%;
  //  align-self: center;
  //}

  .slide-visible {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;

    img {
      align-self: center;
      width: 100%;
    }
  }
`;

const Gallery = ({ type }: PropsType) => {
  const state = useAppSelector((state) => state.cursor);
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLDivElement | null>(null);
  const { onMouseEnter, onMouseLeave, navigateToPage } = useMouseEventHook();
  const [desc, setDesc] = useState('');
  const [list, setList] = useState<{ url: string; key: string | undefined }[]>(
    []
  );
  const [loading, setLoading] = useState(false);

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
    setDesc(list[index].key ? (list[index].key as string) : '');
  };

  const getList = async () => {
    // setTimeout(() => setLoading(true), 3000);
    const { results } = await Storage.list(type === 'WCO' ? 'wco/' : 'etc/', {
      level: 'public',
    });
    console.log('results', results);
    const keys: { url: string; key: string | undefined }[] = [];
    for await (const file of results) {
      const url = await Storage.get(file.key ? file.key : '');
      const key = file.key;
      keys.push({ url: url, key: key });
    }

    setList(keys);
  };

  useEffect(() => {
    getList();
    const timer = setTimeout(() => setLoading(!loading), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ContainerStyle ref={ref}>
      <div className="gallery-subject">
        {type === 'WCO' ? '세계문화오픈 | WCO' : '기타 목적 사업'}
      </div>
      <div className={`carousel-container carousel-item`}>
        <Carousel
          style={{ height: '420px' }}
          className={`carousel-item`}
          autoplay
          autoplayInterval={3000}
          pauseOnHover
          wrapAround
          afterSlide={onChange}
          cellAlign="center"
          renderCenterLeftControls={({ previousDisabled, previousSlide }) => (
            <button
              className=" carousel-item"
              onClick={previousSlide}
              disabled={previousDisabled}
              onMouseEnter={(e) => onMouseEnter(e, ' ')}
              onMouseLeave={(e) => onMouseLeave(e, 'back')}>
              <ArrowLeft className="carousel-item carousel-arrow-item" />
            </button>
          )}
          renderCenterRightControls={({ nextDisabled, nextSlide }) => (
            <button
              className="carousel-item"
              onClick={nextSlide}
              disabled={nextDisabled}
              onMouseEnter={(e) => onMouseEnter(e, ' ')}
              onMouseLeave={(e) => onMouseLeave(e, 'back')}>
              <ArrowRight className="carousel-item carousel-arrow-item" />
            </button>
          )}>
          {list[0] &&
            list &&
            list.map((item, key) => {
              return (
                <div key={key} className={`carousel-item ${item.key}`}>
                  <img
                    src={item.url}
                    className={`carousel-item carousel-img-slide`}
                  />
                  {/*<p className={`carousel-item carousel-desc`}>{item.key}</p>*/}
                </div>
              );
            })}
        </Carousel>

        {/*{list && loading && (*/}
        <p style={{ marginTop: '2rem' }}>
          {desc.split('/')[2] ? desc.split('/')[2] : 'loading...'}
        </p>
        {/*)}*/}
      </div>
    </ContainerStyle>
  );
};

export default Gallery;
