import Expensdate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "./Card";


   const ExpensItem=(props)=> {

    
    return(
     <li>
    <Card className="expense-item">
      <div>
       <Expensdate date={props.date}></Expensdate>
      </div>
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">
                ${props.amount}
            </div>
        </div>
       
    </Card>
    </li>
    )
}

export default ExpensItem;