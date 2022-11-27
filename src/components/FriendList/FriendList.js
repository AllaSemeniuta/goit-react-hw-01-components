import PropTypes from 'prop-types';

import { FriendListItem } from '../FriendListItem/FriendListItem';
import { Box } from 'components/Box/Box';

export const FriendList = ({ friends }) => {
  return (
    <Box
      as="ul"
      width="320px"
      border="normal"
      borderColor="#C0C0C0"
      borderRadius="normal"
      p="20px 0"
    >
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </Box>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
