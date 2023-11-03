import {RandomNumber} from '../components/restriction/RandomNumber';

export const RestrictingProps = () => {
  return (
    <div>
      <RandomNumber value={10} isPositive />
      <RandomNumber value={-2} isNegative />
      <RandomNumber value={0} isZero />
    </div>
  );
};
