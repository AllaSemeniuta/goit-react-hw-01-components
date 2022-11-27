import styled from 'styled-components';

export const Avatar = styled.img`
  width: 130px;
  height: auto;
  margin-bottom: 30px;
`;
export const Title = styled.p`
  margin-bottom: 16px;
  font-size: 28px;
  font-weight: bold;
  color: #696969;
`;
export const Tag = styled.p`
  color: #a9a9a9;
  margin-bottom: 16px;
`;
export const Location = styled.p`
  color: #a9a9a9;
`;
export const StatsWrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-basis: 33%;
  padding: 14px 0;
  &:not(:last-child) {
    border-right: 1px solid #c0c0c0;
  }
`;
export const StatsName = styled.p`
  color: #a9a9a9;
  margin-bottom: 8px;
`;

export const Stats = styled.p`
  color: #696969;
  font-size: 24px;
  font-weight: bold;
`;
