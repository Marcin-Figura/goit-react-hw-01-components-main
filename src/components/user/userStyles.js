import styled from 'styled-components';

export const UserWrapperContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 300px;
margin-left: auto;
margin-right: auto;
border: 3px solid black;
margin-top: 20px;
padding: 20px;
background-color: #ccffff;
`;

export const UserWrapper = styled.div`
    ${UserWrapperContainer};
    
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    border-bottom: 1px solid black;
`;

export const Avatar = styled.img`
    width: 200px;
    border-radius: 50%;
    background-color: white;
`;

export const Text = styled.p`
    font-size: 24px;
    font-weight: bold;
    margin: 10px;
`;

export const SecondaryText = styled.p`
    font-size: 16px;
    color: grey;
    margin: 10px;
`;

export const ProfileStats = styled.ul`
    padding: 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    list-style-type: none;
    margin-left: auto;
    margin-right: auto;
    width: 300px;
    
`;

export const ProfileStatsItem = styled.li`
    display: flex;
    flex-direction: column;
    text-align: center;
    border-left: 1px solid black;
    &:first-child {
        border-left: none;
    }
    
`;
