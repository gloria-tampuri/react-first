import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "./Card";
import Filter from "./Filter";

function Expenses (props){
  
    return ( <Card className="expenses">
       <Filter/>

       {props.items.map((expense=>
       <ExpenseItem 
       key={expense.id}
         title={expense.title}
         amount ={expense.amount}
         date={expense.date}
       />
       ))

       }
      
   </Card>)
   
}

export default Expenses;