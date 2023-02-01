import Hello from './Hello';
import CounterUpPage from './CounterUp/CounterUpPage';
import './App.css';
import './App.scss';
import A from './A'

function App() {
  return (
    <div className="App">
       {/* <Hello/> */}
       {/*<CounterUpPage/> */}
       {/*  <A/> */}




        {content.map(content => {
        <Product
            key={content.id}
            image = {content.image}
            name = {content.name}
            price = {content.price}
            totalSales = {content.totalSales}
            timeLeft = {content.timeLeft}
            rating = {content.rating}
        />
       })}
    </div>
  );
}

export default App;
