import './ExpenseDate.css'

function ExpenseDate(props) {
    let newDate = props.date
    
    
       const month = newDate.toLocaleString('en-US', { month:'long' });
        const day =newDate.toLocaleString('en-US', { day:'2-digit' });
        const year =newDate.getFullYear();



    return(
        <div className="expense-date">
          
                <div className='expense-date__month'>{month}</div>
                <div  className='expense-date__year'>{year}</div>
                <div className='expense-date__day'>{day}</div>
               
           
            </div>

    )
}

export default ExpenseDate;