//import "./App.css";
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
      <Card>
        <h2>Fill Form to add Expense</h2>
        <ExpenseForm addExpenseHandler={addExpenseHandler} />
      </Card>

      <Card>
        <h1>App Component</h1>
        {expenses.map((expense) => {
          return (
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              location={expense.location}
            />
          );
        })}
      </Card>
    </>
  );
}

export default App;
