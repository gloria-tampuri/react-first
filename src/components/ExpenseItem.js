import {useState} from 'react';
import './ExpenseItem.css'
import Card from './Card';
import ExpenseDate from './ExpenseDate'; 
import React from 'react';

function ExpenseItem(props) {

    const [title, setTitle] =useState(props.title);
   
    
   const btnClick=()=>{
   setTitle('Updated!')
   }




    return(
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        <button onClick={btnClick}>{title}</button>
        </Card>
    )
}


export default ExpenseItem;