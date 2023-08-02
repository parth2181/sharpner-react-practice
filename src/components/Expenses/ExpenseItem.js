import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Cards from "../UI/Cards";

const ExpenseItem = (props) => {

 
  return (
    <Cards>
      <div className="expense-item">
        <ExpenseDate date={props.date} />
        <ExpenseDetails amount={props.amount}  location={props.location}   title={props.title} />
      </div>
    </Cards>
  );
};

export default ExpenseItem;