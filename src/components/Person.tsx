// Import Typescript Props
import {PersonProps} from './Person.types';

export const Person = (props: PersonProps) => {
  return (
    <div>
      <h2>
        Welcome back!
        {props.name.last}, {props.name.first}.
      </h2>
    </div>
  );
};
