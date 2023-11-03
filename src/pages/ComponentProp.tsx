import {Private} from '../components/auth/Private';
import {Profile} from '../components/auth/Profile';

export const ComponentProp = () => {
  return (
    <div>
      <Private isLoggedIn={true} Component={Profile} />
    </div>
  );
};
