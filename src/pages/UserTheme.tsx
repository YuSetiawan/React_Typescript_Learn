import {User} from '../components/theme/User';
import {UserContextProvider} from '../components/theme/UserContext';

export const UserTheme = () => {
  return (
    <div>
      <UserContextProvider>
        <User />
      </UserContextProvider>
    </div>
  );
};
