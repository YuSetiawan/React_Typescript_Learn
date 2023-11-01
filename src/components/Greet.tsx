// Typescript Props
type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>{props.isLoggedIn ? `Welcome ${props.name}! You have ${props.messageCount} notification` : `Welcome! You can Login first`}</h2>
    </div>
  );
};
