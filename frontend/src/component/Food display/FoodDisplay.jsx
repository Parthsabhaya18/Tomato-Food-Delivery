import React, { useContext } from 'react'
import './FoodDisplay.css' 
import { Storecontext } from '../../context/Storecontext'

const FoodDisplay = ({category}) => {
     
    // const {food_list} = useContext(Storecontext)

  return (
    <div className='food-display' id='food-display'>
         <h2>Top dishes near to you</h2>
    </div>
  )
}

export default FoodDisplay