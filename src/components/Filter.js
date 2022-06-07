import React from 'react'
import './Filter.css'

const Filter = () => {
  return (
    <div className='filterdiv'>
        <h2 className='filter-head'>Filter by year</h2>
        <select name='years'className='options'>
            <option value='2022'> 2022</option>
            <option value='2021'> 2021</option>
            <option value='2020'> 2020</option>
        </select>
    </div>
  )
}

export default Filter;