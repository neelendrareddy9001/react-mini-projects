import Hello from './Hello';
import CounterUpPage from './CounterUp/CounterUpPage';
import './App.css';
import A from './A'

//localStorage
import Local from './BookLIstWithLocalStorage/Local'


//Product Card
import Product from './ProductCard/Product'
import content from './ProductCard/content'

//Todo
import Todo from './Todo/Todo'


function App() {
  return (
    <div className="App">
       {/* <Hello/> */}
       {/*<CounterUpPage/> */}
       {/*  <A/> */}

       <Todo/>


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
