import React from 'react'
import FilterItems from './Filteritems'
import './Filters.css'

const Filteritem = ({filterlist}) => {
  return (
    <>
    <div className='filters'>
      {filterlist && filterlist.map((filters)=>{
        return <FilterItems filters={filters} key={filters.id}/>
      })}
      </div>
    </>
  )
}

export default Filteritem