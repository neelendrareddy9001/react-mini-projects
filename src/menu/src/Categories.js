import React from 'react'

const Categories = ({fillterItems, Categories}) => {
  return (
    <div className='btn-container'>
        <button className='filter-btn' onClick={() => fillterItems('all')}>All</button>
        <button className='filter-btn' onClick={() => fillterItems('breakfast')}>breakfast</button>
    </div>
  )
}

export default Categories