import styled from 'styled-components';

export const ImageSectionWrapper = styled.div`
  display: flex;
  width: 100%;
  aspect-ratio: 8/3;
  justify-content: center;
  position: relative;
  margin: 5% auto;
`;

export const ImageRow = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 1.2%;
  justify-content: center;
`;

export const OnlyImage = styled.img`
  aspect-ratio: 2;
  border-radius: 5px;
`;

export const MainImage = styled.img`
  width: calc(50% - 0.6%);
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

export const RightImages = styled.div`
  width: calc(50% - 0.6%);
  display: flex;
  gap: 2.4%;
`;

export const ImageItem = styled.img`
  width: calc(50% - 1.2%);
  object-fit: cover;
  border-radius: 5px;
`;

export const TallImage = styled.img`
  width: calc(50% - 1.2%);
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

export const StackedImages = styled.img`
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

export const LLSection = styled.div`
  width: calc(50% - 1.2%);
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 3%;
`;

export const LRSection = styled.div`
  width: calc(50% - 1.2%);
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 3%;
`;
