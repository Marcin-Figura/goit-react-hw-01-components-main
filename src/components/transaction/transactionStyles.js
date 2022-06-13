import styled from 'styled-components';
import {Section} from '../statistic/statisticStyles.js';


export const TableSection = styled(Section)`
    display: flex;
    
    justify-content: center;
`;

export const TableContainer = styled.div`
    width: 400px;
    border: 1px solid pink;
`;

export const TableHead = styled.thead`
    background-color: #99e6ff;
    color: white;
    text-transform: uppercase;
    width: 400px;
`
export const TableHeadItem = styled.th`
    width: 150px;
    height: 30px;
    text-align: center;
    
`;

export const TableBodyItem = styled(TableHeadItem)`

`
