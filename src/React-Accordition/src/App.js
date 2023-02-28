import React, {useState} from 'react';
import './App.css';
import {questions} from './api';
import MyAccordian from './MyAccordian';

const App = () => {

  const [data, setData] = useState(questions);

  return (
    <div className="App">
      <section className="main-dev">
        <h1>React Interview Questions</h1>
        {
          data.map((currElem) => {
            const {id, question, answer} = currElem;
            return <MyAccordian key={id} {...currElem}/>
          })
        }
      </section>
    </div>
  );
}

export default App;
