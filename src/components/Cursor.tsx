import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../store/Hooks';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';

interface CursorTextPropsType {
  text: string;
}

const CursorStyle = styled.div<{ x: number; y: number }>`
  width: 40px;
  height: 40px;
  ${(props) => props.x && `left: calc(${props.x}px - 20px`};
  ${(props) => props.x && `top: calc(${props.y}px - 20px`};
  position: fixed;
  font-size: 12px;
  color: white;
  font-weight: 600;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  pointer-events: none;
  background-color: red;
  opacity: 0.5;
`;

const CursorText = ({ text }: CursorTextPropsType) => {
  return (
    <p
      className="cursor-text"
      style={{
        color: 'white',
        fontSize: '0.8rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {text}
    </p>
  );
};

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cursor = useAppSelector((state) => state.cursor);

  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
    },
  };

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      e.preventDefault();
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  return (
    <>
      <div
        className="cursor bg-red-600 bg-opacity-50"
        style={{
          width: '40px',
          height: '40px',
          left: `calc(${mousePosition.x}px - 20px)`,
          top: `calc(${mousePosition.y}px - 20px)`,
          position: 'fixed',
          fontSize: '12px',
          color: 'white',
          fontWeight: 600,
          borderRadius: '50%',
          display: `${isMobile ? 'none' : 'flex'}`,
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1,
          pointerEvents: 'none',
        }}>
        <CursorText text={cursor.curr === 'main' ? '' : cursor.text} />
      </div>
    </>
  );
};

export default Cursor;
