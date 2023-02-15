import React, {useState} from 'react';
import people from './data';
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from 'react-icons/fa';


const Review = () => {
    const [index, setIndex] = useState(0);
    const {name, job, image, text} = people[index];

    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return newIndex;
        })
    }

    const prevePerson = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return newIndex;
        })
    }

  return (
    <article className='review'>
        <div className='img-container'>
            <img src={image} alt={name} className="person-img"/>
            <span className='quoute-icon'>
                <FaQuoteRight/>
            </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='button-container'>
            <button className='prev-btn'>
            <FaChevronLeft onClick={() => prevePerson}/>
            </button>
            <button className='next-btn'>
                <FaChevronRight onClick={() => nextPerson}/>
            </button>
        </div>
        <button className='random-btn'>surprice me</button>
    </article>
  )
}

export default Review