import styled from 'styled-components';

export const Title = styled.h2`
  text-align: center;
  margin: 16px 0;
  font-size: 24px;
  font-weight: bold;
  background-color: #fff;
  color: #696969;
`;

export const StatBox = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-basis: 25%;
  padding: 6px 0;
  border-top: 1px solid #c0c0c0;
  background-color: ${getRandomHexColor};
  overflow: hidden;

  &:not(:last-child) {
    border-right: 1px solid #c0c0c0;
  }
`;

export const StatName = styled.span`
  color: #fff;
  font-size: 10px;
  margin-bottom: 10px;
  overflow: hidden;
`;

export const StatData = styled.span`
  color: #fff;
  font-size: 20px;
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
