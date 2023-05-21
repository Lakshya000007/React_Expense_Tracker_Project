import { useState } from "react";
import "./ExpenseForm.css";
import Card from "../UI/Card";

const ExpenseForm = ({ addExpenseHandler }) => {
  // const [enteredTitle, setEnteredTitle] = useState("");
  // const [enteredAmount, setEnteredAmount] = useState("");
  // const [enteredLocation, setEnteredLocation] = useState("");
  // const [enteredDate, setEnteredDate] = useState("");

  const [cancel, setCancel] = useState("false");

  const [msg, setMsg] = useState("");

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
      id: Math.random().toString(),
    };

    if (
      expenseData.title.trim() !== "" &&
      expenseData.amount.trim() !== "" &&
      expenseData.date.toString().trim() !== {} &&
      expenseData.location.trim() !== ""
    ) {
      addExpenseHandler(expenseData);
      setFormDetails({
        enteredTitle: "",
        enteredAmount: "",
        enteredLocation: "",
        enteredDate: "",
      });

      setMsg("");
    } else {
      setMsg("Fill all form fields to submit");
      console.log(msg);
    }

    console.log(expenseData);
  };

  const handleClick = (event) => {
    const expenseData = {
      title: formDetails.enteredTitle,
      amount: formDetails.enteredAmount,
      date: new Date(formDetails.enteredDate),
      location: formDetails.enteredLocation,
      id: Math.random().toString(),
    };

    if (
      expenseData.title.trim() === "" ||
      expenseData.amount.trim() === "" ||
      expenseData.date.toString().trim() === {} ||
      expenseData.location.trim() === ""
    ) {
      event.preventDefault();
    }
  };

  const handleCancel = () => {
    setCancel("true");
  };

  if (cancel === "false") {
    return (
      <div>
        <form action="" className="form" onSubmit={handleSubmit}>
          <div className="col">
            <label htmlFor="title">Enter Title</label>
            <input
              type="text"
              id="title"
              value={formDetails.enteredTitle}
              onChange={handleTitle}
            />
          </div>
          <div className="col">
            <label htmlFor="amount">Enter Amount</label>
            <input
              type="number"
              onChange={handleAmount}
              value={formDetails.enteredAmount}
            />
          </div>
          <div className="col">
            <label htmlFor="date">Enter Date</label>
            <input
              type="date"
              id="date"
              onChange={handleDate}
              value={formDetails.enteredDate}
              min="2019-01-01"
              max="2022-12-31"
              required
            />
          </div>
          <div className="col">
            <label htmlFor="location">Enter Location</label>
            <input
              type="location"
              id="location"
              onChange={handleLocation}
              value={formDetails.enteredLocation}
            />
          </div>
          <button
            className="col"
            type="submit"
            onClick={handleClick}
            style={{ color: "blue" }}
          >
            Submit to Add Expense
          </button>
          <button onClick={handleCancel}>Cancel</button>
          <div>
            <center style={{ color: "red" }}>{msg}</center>
          </div>
        </form>
      </div>
    );
  } else {
    return (
      <Card>
        <center>
          <button
            style={{
              backgroundColor: "black",
              color: "white",
              padding: "5px",
              width: "200px",
              height: "60px",
            }}
            onClick={() => {
              setCancel("false");
            }}
          >
            Add New Expense
          </button>
        </center>
      </Card>
    );
  }
};

export default ExpenseForm;
