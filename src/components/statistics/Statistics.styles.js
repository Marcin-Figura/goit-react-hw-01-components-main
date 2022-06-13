import styled from 'styled-components';

export const StaticticsContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 400px;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  margin-top: 100px;
  border-box: 10px;
`;

export const DataTitle = styled.h2`
  font-weight: bold;
  text-align: center;
  color: #52575b;
`;

export const StatList = styled.ul`
  display: flex;
  height: 100px;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 15px;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ color }) => color};
`;

export const ItemLabel = styled.span`
  color: #fff;
  font-size: 14px;
`;

export const ItemPercentage = styled.span`
  color: #fff;
  font-size: 24px;
`;
