import React from 'react'

const Categories = ({fillterItems, categories}) => {
  return (
    <div className='btn-container'>
        {categories.map((category, index) => {
            return (
                <button 
                    type='button'
                    className='filter-btn'
                    key={index}
                    onClick={() => fillterItems(category)}
                >
                    {category}
                </button>
            )
        })}
    </div>
  )
}

export default Categories
