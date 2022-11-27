import styled from 'styled-components';

export const Status = styled.span`
  width: 15px;
  height: 15px;
  border: 1px solid transparent;
  border-radius: 50%;
  background-color: ${p => (p.isOnline ? 'green' : 'red')};
`;

export const Avatar = styled.img``;
export const FriendName = styled.p`
  flex-grow: 2;
`;

export const FriendsWrap = styled.li`
  display: flex;
  align-items: center;
  border: 1px solid #c0c0c0;
  border-radius: 4px;
  width: 270px;
  margin-left: auto;
  margin-right: auto;
  gap: 16px;
  padding: 6px 12px;
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;
