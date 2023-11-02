// Typescript Props
type GreetProps = {
  name: string;
  messageCount?: number; // Adding a question mark to declare the condition if the value is empty
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  const {messageCount = 0} = props; // if the messageCount value is empty it will show 0
  return (
    <div>
      <h2>{props.isLoggedIn ? `Welcome ${props.name}! You have ${props.messageCount} notification` : `Welcome! You can Login first`}</h2>
    </div>
  );
};
