import styled from 'styled-components';


export const FriendListElem = styled.li`
    border: 4px solid grey;
    margin-top: 10px;
    padding: 10px;
    width: 300px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    background-color: ${(props) => (props.isOnline ? '#03fc6b' : '#fc5a03')};
    font-size: 20px;
    color: #1c522e;
    border-radius: 5px;
    border-style: outset;
`;


export const StatusOnOff = styled.span`
    
    width: 30px;
    height: 30px;
    background-color: ${(props) => (props.isOnline ? 'green' : 'red')};
    border-radius: 50%;
    display:flex;
    justify-content: center;
    align-items: center;
    color: white;
`;

