import { useState } from "react";
import "./ExpenseDetails.css";

const ExpenseDetails = ({ title, location, amount }) => {
  const [cost, setCost] = useState(amount);

  const handleClick = (e) => {
    const parent = e.target.parentElement.parentElement.parentElement;
    const child = e.target.parentElement.parentElement;
    console.log(parent);
    console.log(child);
    parent.removeChild(child);
  };

  const handleCost = () => {
    setCost(100);
  };

  return (
    <>
      <div className="expense-item__description">
        <h2>
          {title} | Location : {location}
        </h2>
        <div className="expense-item__price">${cost}</div>
        <button onClick={handleCost}>Change Expense to 100$</button>
        <button onClick={handleClick}>Delete Expense</button>
      </div>
    </>
  );
};

export default ExpenseDetails;
