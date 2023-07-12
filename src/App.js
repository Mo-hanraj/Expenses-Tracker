
import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpense";

const DummyExpense = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  { id: 'e5',
  title: 'New Watch',
  amount: 550,
  date: new Date(2022, 5, 12),
},
{
id: 'e6',
title: 'health insurance',
amount: 550,
date: new Date(2019, 5, 12),
},
{
id: 'e7',
title: 'New Car tyres',
amount: 750,
date: new Date(2022, 5, 12),
},
];


const  App=()=> {
  const[expense,setExpense]=useState(DummyExpense)
 
  const addExpenseHandler=(expense)=>{
    setExpense((prevExpenses)=>[ expense, ...prevExpenses])
    
  }
  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler}/>
      <Expenses item={expense}/>
     
    </div>
  );
}

export default App;

