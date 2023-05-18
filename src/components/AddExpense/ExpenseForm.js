import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  // const [enteredTitle, setEnteredTitle] = useState("");
  // const [enteredAmount, setEnteredAmount] = useState("");
  // const [enteredLocation, setEnteredLocation] = useState("");
  // const [enteredDate, setEnteredDate] = useState("");

  const [formDetails, setFormDetails] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredLocation: "",
    enteredDate: "",
  });

  const handleTitle = (event) => {
    setFormDetails((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };

  const handleAmount = (event) => {
    setFormDetails((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
  };

  const handleDate = (event) => {
    setFormDetails((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
  };

  const handleLocation = (event) => {
    setFormDetails((prevState) => {
      return { ...prevState, enteredLocation: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const expenseData = {
      title: formDetails.enteredTitle,
      amount: formDetails.enteredAmount,
      date: new Date(formDetails.enteredDate),
      location: formDetails.enteredLocation,
    };

    console.log(expenseData);
  };

  return (
    <div>
      <form action="" className="form" onSubmit={handleSubmit}>
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
        <button className="col" type="submit">
          Add New Expense
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
