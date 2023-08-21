import React from 'react';
import './ExpenseItem.css';


export default function ExpenseItem(props){
 
  return(
    

    <div className="expense-item">
      <div>August 21st 2023</div>
      <div className='expense-item_description'> 
      <h2>{ props.title } </h2>
      <div className='expense-item_price'>100$</div>
      </div>

    </div>
  )
}