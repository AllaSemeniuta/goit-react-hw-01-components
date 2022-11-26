import { GlobalStyle } from './GlobalStyle';
import { Profile } from './Profile.js/Profile';
import user from '../data/user.json';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Profile user={user} />
    </>
  );
};
