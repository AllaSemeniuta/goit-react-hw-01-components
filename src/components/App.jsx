import { GlobalStyle } from './GlobalStyle';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import user from '../data/user.json';
import statistics from '../data/statistics.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Profile user={user} />
      <Statistics stats={statistics} title="Upload stats" />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
