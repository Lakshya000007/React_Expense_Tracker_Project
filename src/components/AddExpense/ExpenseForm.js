import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredLocation, setEnteredLocation] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const handleTitle = (event) => {
    setEnteredTitle(event.target.value);
  };

  const handleAmount = (event) => {
    setEnteredAmount(event.target.value);
  };

  const handleDate = (event) => {
    setEnteredDate(event.target.value);
  };

  const handleLocation = (event) => {
    setEnteredLocation(event.target.value);
  };

  return (
    <div>
      <form action="" className="form">
        <div className="col">
          <label htmlFor="title">Enter Title</label>
          <input type="text" id="title" onChange={handleTitle} />
        </div>
        <div className="col">
          <label htmlFor="amount">Enter Amount</label>
          <input type="number" onChange={handleAmount} />
        </div>
        <div className="col">
          <label htmlFor="date">Enter Date</label>
          <input type="date" id="date" onChange={handleDate} />
        </div>
        <div className="col">
          <label htmlFor="location">Enter Location</label>
          <input type="location" id="location" onChange={handleLocation} />
        </div>
        <button className="col">Add New Expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
