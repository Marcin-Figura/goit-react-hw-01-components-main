import './friends.css'

const friendsArr = require('components/friends/friends.json');
console.log(friendsArr)

export const FriendList = ({friends}) => (
    <>
    {friendsArr.map(friends => (
        <ul key={friends.id}>
            <li class="item">
                <span class="status">{friends.isOnline ? 'on' : 'off'}</span>
                <img class="avatar" src={friends.avatar} alt="User avatar" width="48" />
                <p class="name">{friends.name}</p>
            </li>
            {FriendListItem}
        </ul>
    ))}
    </>
    
    
);
export const FriendListItem = ({friends}) => (
    
    <>

        {friendsArr.map(friends => (
            <li key = {friends.id} class="item">
                <span class="status">{friends.isOnline}</span>
                <img class="avatar" src={friends.avatar} alt="User avatar" width="48" />
                <p class="name">{friends.name}</p>
            </li>
        ))}
    </>
);



   


export default FriendList
