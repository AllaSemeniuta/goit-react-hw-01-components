import PropTypes from 'prop-types';

import { Box } from 'components/Box/Box';
import {
  Avatar,
  StatsWrapper,
  Location,
  Title,
  Tag,
  StatsName,
  Stats,
} from './Profile.styled';

export const Profile = ({
  user: { username, tag, location, avatar, stats },
}) => {
  return (
    <Box
      border="normal"
      borderColor="#C0C0C0"
      borderRadius="normal"
      width="320px"
      fontFamily="Montserrat"
      overflow="hidden"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        py="40px"
        px="20px"
      >
        <Avatar src={avatar} alt="User avatar" />
        <Title>{username}</Title>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Box>

      <Box
        as="ul"
        display="flex"
        alignItems="center"
        justifyContent="space-around"
        borderTop="normal"
        backgroundColor="#FFFAF0"
        borderColor="#C0C0C0"
        overflow="hidden"
      >
        <StatsWrapper>
          <StatsName>Followers</StatsName>
          <Stats>{stats.followers}</Stats>
        </StatsWrapper>
        <StatsWrapper>
          <StatsName>Views</StatsName>
          <Stats>{stats.views}</Stats>
        </StatsWrapper>
        <StatsWrapper>
          <StatsName>Likes</StatsName>
          <Stats>{stats.likes}</Stats>
        </StatsWrapper>
      </Box>
    </Box>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }).isRequired,
};
