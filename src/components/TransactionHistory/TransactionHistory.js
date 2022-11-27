import { Box } from 'components/Box/Box';
import PropTypes from 'prop-types';
import { TableHeader, TableCell } from './TransactionHistory.styled';
export const TransactionHistory = ({ items }) => {
  return (
    <Box
      as="table"
      width="450px"
      // border="normal"
      // borderColor="#C0C0C0"
      // borderRadius="normal"
      fontFamily="Montserrat"
      // borderSpacing="0px"
    >
      <Box as="thead">
        <Box
          as="tr"
          p="20px 0px"
          textAlign="center"
          borderCollapse="collapse"
          fontSize="18px"
        >
          <TableHeader>Type</TableHeader>
          <TableHeader>Amount</TableHeader>
          <TableHeader>Currency</TableHeader>
        </Box>
      </Box>
      <tbody>
        {items.map(item => {
          return (
            <tr key={item.id}>
              {<TableCell>{item.type}</TableCell>}
              {<TableCell>{item.amount}</TableCell>}
              {<TableCell>{item.currency}</TableCell>}
            </tr>
          );
        })}
      </tbody>
    </Box>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
