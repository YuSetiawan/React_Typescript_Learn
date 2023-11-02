import {Greet} from '../components/Greet';
import {Heading} from '../components/Heading';
import {Oscar} from '../components/Oscar';
import {Status} from '../components/Status';

export const IntermediateProps = () => {
  return (
    <div>
      <Status status="loading" /> {/* status can be change to loading | succes | error */}
      <Heading> Children Text</Heading>
      <Oscar>
        <Heading>Oscar winning goes to Aaron Paul!</Heading>
      </Oscar>
      <Greet name="Yusuf" isLoggedIn={true} />
    </div>
  );
};
