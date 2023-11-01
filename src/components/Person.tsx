// Typescript Props on Object
type PersonProps = {
  name: {
    first: string;
    last: string;
  };
};

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
