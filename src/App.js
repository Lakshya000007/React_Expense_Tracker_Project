//import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Super Bike",
      amount: 9754.78,
      date: new Date(2020, 7, 14),
      locationOfExpenditure: "Banglore",
    },
    {
      id: "e2",
      title: "Super Car",
      amount: 21254.78,
      date: new Date(2020, 7, 24),
      locationOfExpenditure: "Chennai",
    },
    {
      id: "e3",
      title: "Badminton",
      amount: 129.78,
      date: new Date(2023, 9, 4),
      locationOfExpenditure: "Hyderabad",
    },
    {
      id: "e4",
      title: "Shoes",
      amount: 98.78,
      date: new Date(2023, 4, 21),
      locationOfExpenditure: "Pune",
    },
  ];

  return (
    <div className="App">
      <h1>App Component</h1>
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            location={expense.locationOfExpenditure}
          />
        );
      })}
      {/* <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
        location={expenses[0].locationOfExpenditure}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
        location={expenses[1].locationOfExpenditure}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
        location={expenses[2].locationOfExpenditure}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
        location={expenses[3].locationOfExpenditure}
      /> */}
    </div>
  );
}

export default App;
