import {Box} from '../components/theme/Box';
import {ThemeContextProvider} from '../components/theme/ThemeContext';

export const Theme = () => {
  return (
    <div>
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
    </div>
  );
};
