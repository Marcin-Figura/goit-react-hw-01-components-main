import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 300px;
  border: 1px solid #e7ecf2;
  border-radius: 10px;
  box-shadow: 0 0 1em #cfcfcf;
`;

export const TopSection = styled.div`
  padding: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImgAvatar = styled.img`
  border-radius: 50%;
  width: 100px;
`;

export const MainParagraph = styled.p`
  font-size: 20px;
  font-weight: 700;
  padding-top: 20px;
  padding-bottom: 5px;
  margin: 0;
  color: #4d5967;
`;

export const SideParagraph = styled.p`
  padding: 5px;
  margin: 0;
  color: #5d5b5a;
`;

export const BottomSection = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  border-top: 1px solid #e7ecf2;
  background-color: #f7f7f7;
  margin: 0;
  padding: 0;
`;

export const LiElem = styled.li`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 15px 0;
  align-items: center;
  border-right: 1px #e7ecf2 solid;
  color: #4d5967;
`;

export const SpanLabel = styled.span`
  font-size: 10px;
  color: #5d5b5a;
`;
