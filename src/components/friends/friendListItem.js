import { FriendListElem,
        StatusOnOff,
       

} from './friendsStyles.js'


export const FriendListItem = ({isOnline, avatar, name}) => {
    
    const status = `${isOnline ? 'on' : 'off'}`;
    console.log(isOnline);
    return (

        <FriendListElem isOnline={isOnline}>
                
                <StatusOnOff isOnline={isOnline}>{status}</StatusOnOff>
                <img src={avatar} alt="User avatar" width="48" />
                <p>{name}</p>
        </FriendListElem>
    )
    
};

export default FriendListItem;