import React, {useState} from 'react'
import Data from './components/Data';
import List from './components/List'
import './App.css';

function App() {
  const [people, setPeople] = useState(Data);
  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthday today</h3>
        <List people={people}/>
        <button onClick={() => setPeople([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
