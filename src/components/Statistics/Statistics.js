import PropTypes from 'prop-types';
import { Title, StatBox, StatName, StatData } from './Statistics.styled';
import { Box } from 'components/Box/Box';

export const Statistics = ({ title, stats }) => {
  return (
    <Box
      as="section"
      border="normal"
      borderColor="#C0C0C0"
      borderRadius="normal"
      width="320px"
      fontFamily="Montserrat"
      overflow="hidden"
    >
      {title && <Title>{title}</Title>}

      <Box as="ul" display="flex" alignItems="center" justifyContent="center">
        {stats.map(stat => (
          <StatBox key={stat.id}>
            {<StatName>{stat.label}</StatName>}
            {<StatData>{stat.percentage}</StatData>}
          </StatBox>
        ))}
      </Box>
    </Box>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
