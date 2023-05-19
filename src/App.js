import "./App.css";
import { useState } from "react";
import ExpenseForm from "./components/AddExpense/ExpenseForm";
//import ExpenseItem from "./components/Expenses/ExpenseItem";
import Card from "./components/UI/Card";
import ExpensesFilter from "./components/Expenses/ExpensesFilter";
import ExpenseList from "./components/Expenses/ExpenseList";

function App() {
  const [expenses, setExpense] = useState([]);

  const [filteredYear, setFilteredYear] = useState("All");

  const addExpenseHandler = (newExpense) => {
    setExpense([...expenses, newExpense]);
  };

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  console.log(expenses);

  return (
    <>
      <h2>
        <center>Fill Form to add Expense</center>
      </h2>
      <ExpenseForm addExpenseHandler={addExpenseHandler} />

      <Card>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <h1>
          <center>Expenses List</center>
        </h1>

        <ExpenseList expenses={expenses} year={filteredYear} />
      </Card>
    </>
  );
}

export default App;
