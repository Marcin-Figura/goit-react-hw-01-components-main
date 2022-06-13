import styled, { css } from 'styled-components';

const commonStylesForText = css`
  font-size: 14px;
`;

const FlexDiv = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    margin-left:auto;
    margin-right: auto;
    list-style-type: none;
    padding: 0px;

`;

export const Section = styled.section`
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;    
`

export const StatisticSection =styled(Section)`
    border: 1px solid grey;
    width: 400px;
`;


export const Head = styled(FlexDiv)`
    ${commonStylesForText};
    font-weight: bold;
    text-decoration: underline;
    font-size: 28px;
    text-transform: uppercase;
`;

export const StatisticList = styled(FlexDiv)`
    ${commonStylesForText};
    width: 400px;
`;

const randomColor = Math.floor(Math.random()*16777215).toString(16);


export const StatisticListItem = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #${randomColor};
    width: 60px;
    height: 80px;
`

export const Text = styled.span`
    ${commonStylesForText};
    margin: 10px;
    color: white;
    text-align: center;
`;

export const SecondaryText = styled(Text)`
    
    font-size: 20px
`