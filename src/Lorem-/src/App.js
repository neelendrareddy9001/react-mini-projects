import React, {useState} from 'react'
import './App.css';
import data from './data';


function App() {

  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const hadnleSubit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    setText(data.slice(0, amount));
  }

  return (
    <section className='section-center'>
      <h3>tired of boring lorem ipsum</h3>
      <form className='lorem-ipsum' onSubmit={hadnleSubit}>
        <label htmlFor='amount'>
          paragraph:
        </label>
        <input 
          type="number" 
          name="amount" 
          id="amount" 
          vlue={count} 
          onChange={(e) =>setCount(e.target.value)}
        />
        <button type="submit" className='btn'>generate</button>
      </form>
      <article className='lorem-ipsum'>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </article>
    </section>
  );
}

export default App;
