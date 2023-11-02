// Typescript Props on Object
/* export type PersonProps = {
    name: {
      first: string;
      last: string;
    };
  }; */

// Destructuring props
export type Name = {
  first: string;
  last: string;
};

export type PersonProps = {
  name: Name;
};
