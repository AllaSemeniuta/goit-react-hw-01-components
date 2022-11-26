import { Box } from 'components/Box.js/Box';
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
        <Tag>{tag}</Tag>
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
      >
        <StatsWrapper>
          <StatsName>Followers</StatsName>
          <Stats>{stats.followers}</Stats>
        </StatsWrapper>
        <StatsWrapper
          borderLeft="1px solid #C0C0C0"
          borderRight="1px solid #C0C0C0"
        >
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
