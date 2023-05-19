import "./App.css";
import { useState } from "react";
import ExpenseForm from "./components/AddExpense/ExpenseForm";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Card from "./components/UI/Card";
import ExpensesFilter from "./components/Expenses/ExpensesFilter";

function App() {
  const [expenses, setExpense] = useState([]);

  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const addExpenseHandler = (newExpense) => {
    setExpense([...expenses, newExpense]);
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

        {expenses.map((expense) => {
          return (
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              location={expense.location}
              key={expense.id}
            />
          );
        })}
      </Card>
    </>
  );
}

export default App;
