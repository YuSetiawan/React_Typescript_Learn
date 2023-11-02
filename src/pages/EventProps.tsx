import {Button} from '../components/Button';
import {Input} from '../components/Input';

export const EventProps = () => {
  return (
    <div>
      <Button
        handleClick={(event, id) => {
          console.log('Button Clicked', event, id);
        }}
      />
      <Input value="" handleChange={(event) => console.log(event)} />
    </div>
  );
};
