import PropTypes from 'prop-types';
import {
  FriendsListUL,
  FriendsListLI,
  FriendName,
  Status,
  FriendImg,
} from './FriendsList.styles';

export const FriendsList = ({ friends }) => {
  return (
    <FriendsListUL className="friends-list">
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendsListLI key={id}>
          <Status isOnline={isOnline} className="status">
            {isOnline}
          </Status>
          <FriendImg
            avatar={avatar}
            className="avatar"
            src={avatar}
            alt="avatar"
          />
          <FriendName name={name}>{name}</FriendName>
        </FriendsListLI>
      ))}
    </FriendsListUL>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.array.isRequired,
};
