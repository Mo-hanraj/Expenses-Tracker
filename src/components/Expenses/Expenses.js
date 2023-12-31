import { useState } from "react";
import Card from "./Card";
import ExpensesList from "./ExpensesList"
import ExpensesFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import './Expenses.css';



 const Expenses=(props)=>{
  
  const[filteredYear,setFilteredYear]=useState('2020')

  const filterChangeHandler=(selectedYear)=>{
      setFilteredYear(selectedYear)
  }

  const filteredExpenses=props.item.filter((expense=>{
    return expense.date.getFullYear().toString()===filteredYear;
  }))

  

    return(
      <div>
     <Card className="expenses">
      <ExpensesFilter 
      selected={filteredYear}
       onChange={filterChangeHandler}/>
        <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses} />
     
     </Card>
     </div>
    )


}
export default Expenses;