import FriendListItem from './friendListItem';

const friendsArr = require('components/friends/friends.json');

const FriendList = ({friends}) => (
    <>
    {friendsArr.map((friend) => {
        const {id, isOnline, avatar, name} = friend;
    return (
        <FriendListItem
        key={id}
        isOnline={isOnline}
        avatar={avatar}
        name={name}
        />
    )
    })}
    </>
)

export default FriendList