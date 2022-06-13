import styled from 'styled-components';

export const TransactionsTable = styled.table`
  box-shadow: 1px 9px 13px -4px rgba(66, 68, 90, 1);
  border-radius: 10px;
`;

export const TransactionRow = styled.tr`
  display: flex;
  justify-content: space-around;
  width: 1000px;
`;

export const TransactionsHeader = styled.th`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 60px;
  background-color: #00bcd5;
  color: #fff;
  border-right: ${({ last }) => (!last ? '3px solid #5de5f9' : 'none')};
`;

export const TransastionData = styled.td`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 60px;
  background-color: ${({ color }) => color};
  border-right: ${({ last }) => (!last ? '3px solid #f4f5f5' : 'none')};
`;
