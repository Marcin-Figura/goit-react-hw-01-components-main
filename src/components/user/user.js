import { UserWrapper,
  UserWrapperContainer, 
  Avatar, 
  Text, 
  SecondaryText,
  ProfileStats,
  ProfileStatsItem} from './userStyles.js'

export const Profile = ({username, tag, location, avatar, stats,followers,views,likes}) => {
    return (
        <>
        <UserWrapperContainer>
            <UserWrapper>
                <Avatar
                    src={avatar}
                    alt="user avatar"
                    classNameName="avatar"
                />
                <Text>{username}</Text>
                <SecondaryText>@{tag}</SecondaryText>
                <SecondaryText>{location}</SecondaryText>
            </UserWrapper>

            <ProfileStats>
              <ProfileStatsItem>
                <SecondaryText>Followers</SecondaryText>
                <Text> {followers}</Text>
              </ProfileStatsItem>
              <ProfileStatsItem>
                <SecondaryText>Views</SecondaryText>
                <Text> {views}</Text>
              </ProfileStatsItem>
              <ProfileStatsItem>
                <SecondaryText>Likes</SecondaryText>
                <Text> {likes}</Text>
              </ProfileStatsItem>
            </ProfileStats>
        </UserWrapperContainer>
        </>
    )
}

export default Profile