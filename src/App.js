import "./App.css";
import { useState } from "react";
import ExpenseForm from "./components/AddExpense/ExpenseForm";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Card from "./components/UI/Card";

function App() {
  const [expenses, setExpense] = useState([]);

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
        <h1>
          <center>App Component</center>
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
