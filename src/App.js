//import "./App.css";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Card from "./components/UI/Card";

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
      date: new Date(2020, 6, 24),
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
    {
      id: "e5",
      title: "New Home",
      amount: 242754.78,
      date: new Date(2023, 6, 7),
      locationOfExpenditure: "Manali",
    },
  ];

  return (
    <Card>
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
    </Card>
  );
}

export default App;
