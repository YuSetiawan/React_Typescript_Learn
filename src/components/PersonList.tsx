import {Name} from './Person.types';

// Typescript Props on Array
type PersonListProps = {
  names: Name[]; //Import props
};

export const PersonList = (props: PersonListProps) => {
  return (
    <div>
      <h1>List person mapping props</h1>
      {/* Mapping props */}
      {props.names.map((name) => {
        return (
          <h2 key={name.first}>
            {' '}
            {name.first} {name.last}{' '}
          </h2>
        );
      })}
    </div>
  );
};
