import './App.css';
import {Greet} from './components/Greet';
import {Person} from './components/Person';
import {PersonList} from './components/PersonList';

function App() {
  const personName = {
    first: 'Walter',
    last: 'White',
  };

  const personList = [
    {
      first: 'Walter',
      last: 'White',
    },
    {
      first: 'Samantha',
      last: 'Grey',
    },
    {
      first: 'Sam',
      last: 'Raimi',
    },
  ];

  return (
    <div className="App">
      <Greet name="Yusuf" messageCount={12} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={personList} />
    </div>
  );
}

export default App;
