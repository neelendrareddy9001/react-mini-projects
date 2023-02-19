import React, {useState} from 'react'
import Menu from './Menu';
import items from './data';
import './App.css';
import Categories from './Categories';


const allCategories = ['all', ...new Set((items.map((item)=> item.category)))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const fillterItems = (category) => {
    if(category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => 
      item.category === category);
      setMenuItems(newItems);
  }

function App() {
  return (
      <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} fillterItems={fillterItems}/>
        <Menu items={menuItems}/>
      </section>
    </main>
  );
}

export default App;
