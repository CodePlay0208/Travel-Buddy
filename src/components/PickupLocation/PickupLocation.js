import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import CustomLocationIcon from './CustomLocationIcon';

const ICON_SIZE = 28; 
const DEFAULT_GAP = 40; 

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  gap: 24px;
  background: #FFFFFF;
  box-shadow: 0px 1px 11px rgba(0, 0, 0, 0.3);
  border-radius: 16px;
  width: 100%;
`;

const Title = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  color: #009965;
  margin: 0;
  white-space: nowrap;
`;

const ScrollWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0,0,0,0.2);
    border-radius: 3px;
  }
`;

const RowWrapper = styled.div`
  position: relative;
  width: ${({ count }) => (count <= 5 ? '100%' : 'auto')};
  margin-top: ${ICON_SIZE}px;
  padding-bottom: 32px;
`;

const BackgroundLine = styled.div`
  position: absolute;
  top: ${ICON_SIZE / 2}px;
  left: ${({ left }) => `${left}px`};
  width: ${({ width }) => `${width}px`};
  height: 1px;
  background-color: rgba(5, 5, 5, 0.4);
  z-index: 1;
`;

const ItemsRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: ${({ count }) => (count <= 5 ? 'space-between' : 'flex-start')};
  width: ${({ count }) => (count <= 5 ? '100%' : 'auto')};
  position: relative;
  z-index: 2;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: ${({ count }) => (count <= 5 ? '1 1 0' : '0 0 auto')};
  white-space: nowrap;
`;

const IconWrapper = styled.div`
  width: ${ICON_SIZE+10}px;
  height: ${ICON_SIZE}px;
  background: #FFFFFF;
  padding:0 5px;
  color: #8DD3BB;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Name = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #050505;
  text-align: center;
  margin-top: 8px;
`;

const Subtitle = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #050505;
  text-align: center;
  margin-top: 4px;
`;

const PickupLocation = ({ title, locations }) => {
  const rowRef = useRef(null);
  const iconRefs = useRef([]);
  const [lineParams, setLineParams] = useState({ left: 0, width: 0 });

  const measureLine = () => {
    if (!rowRef.current || !iconRefs.current || iconRefs.current.length === 0) {
      setLineParams({ left: 0, width: 0 });
      return;
    }
    const wrapperRect = rowRef.current.getBoundingClientRect();
    const firstIcon = iconRefs.current[0];
    const lastIcon = iconRefs.current[iconRefs.current.length - 1];
    if (firstIcon && lastIcon) {
      const firstRect = firstIcon.getBoundingClientRect();
      const lastRect = lastIcon.getBoundingClientRect();
      const firstCenter = firstRect.left - wrapperRect.left + ICON_SIZE / 2;
      const lastCenter = lastRect.left - wrapperRect.left + ICON_SIZE / 2;
      const left = firstCenter;
      const width = Math.max(0, lastCenter - firstCenter);
      setLineParams({ left, width });
    }
  };

  useEffect(() => {
    measureLine();
    window.addEventListener('resize', measureLine);
    return () => {
      window.removeEventListener('resize', measureLine);
    };
  }, [locations]);

  if (!Array.isArray(locations) || locations.length === 0) {
    return null;
  }
  const count = locations.length;

  iconRefs.current = [];
  const items = locations.map((loc, idx) => {
    const isLast = idx === locations.length - 1;
    let style = undefined;
    if (count > 5 && !isLast) {
      const gap = typeof loc.connectorWidth === 'number' ? loc.connectorWidth : DEFAULT_GAP;
      style = { marginRight: `${gap}px` };
    }
    return (
      <Item key={idx} count={count} style={style}>
        <IconWrapper
          ref={el => {
            iconRefs.current[idx] = el;
          }}
        >
          <CustomLocationIcon width={ICON_SIZE+1} height={ICON_SIZE} aria-hidden="true" />
        </IconWrapper>
        <Name>{loc.name}</Name>
        <Subtitle>{loc.subtitle}</Subtitle>
      </Item>
    );
  });

  if (count > 5) {
    return (
      <Container>
        <Title>{title}</Title>
        <ScrollWrapper>
          <RowWrapper ref={rowRef} count={count}>
            {count >= 2 && (
              <BackgroundLine left={lineParams.left} width={lineParams.width} />
            )}
            <ItemsRow count={count}>{items}</ItemsRow>
          </RowWrapper>
        </ScrollWrapper>
      </Container>
    );
  }
  return (
    <Container>
      <Title>{title}</Title>
      <RowWrapper ref={rowRef} count={count}>
        {count >= 2 && (
          <BackgroundLine left={lineParams.left} width={lineParams.width} />
        )}
        <ItemsRow count={count}>{items}</ItemsRow>
      </RowWrapper>
    </Container>
  );
};

export default PickupLocation;
