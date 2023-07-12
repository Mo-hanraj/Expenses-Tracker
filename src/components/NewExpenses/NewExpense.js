

import React, { useState } from "react";
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm"

const NewExpenses=(props)=>{
 const[isEditing,setIsEditing]=useState(false)
    const SaveExpenseDataHandler=(enterExpenseData)=>{
        const expenseData={
            ...enterExpenseData,
            id:Math.random().toString()
        }
        
          props.onAddExpense(expenseData)
          setIsEditing(false)
    }

const StartEditingHandler=()=>{
    setIsEditing(true)

}
const StopEditingHandler=()=>{
    setIsEditing(false)
}
return(
 <div className="new-expense">
{!isEditing && <button onClick={StartEditingHandler}>Add new exp</button>}
{isEditing && <ExpenseForm 
onSaveExpenseData={SaveExpenseDataHandler}
onPass={StopEditingHandler}
/>}
</div>
)
}

export default NewExpenses;