import styled from 'styled-components';

export const FriendsListUL = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
`;

export const FriendsListLI = styled.li`
  width: 300px;
  border: 1px solid #000;
  border-radius: 10px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  padding: 10px;
  box-shadow: 5px 7px 21px -7px rgba(66, 68, 90, 1);
`;

export const FriendName = styled.p`
  padding-left: 25px;
  font-size: 20px;
  font-weight: bold;
  margin: 0;
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
`;

export const FriendImg = styled.img`
  width: 70px;
  height: 70px;
  margin-left: 20px;
`;
