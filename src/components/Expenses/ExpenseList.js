import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses, year }) => {
  if (year === "All") {
    if (expenses.length === 0) {
      return <h3>Start Adding data...</h3>;
    }

    return (
      <>
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
      </>
    );
  } else if (year === "2019") {
    const newExpense = expenses.filter((expense) => {
      return expense.date.getFullYear() === 2019;
    });

    if (newExpense.length === 0) {
      return <h3>No data Found for this Year. Start Adding .....</h3>;
    }

    return (
      <>
        {newExpense.map((expense) => {
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
      </>
    );
  } else if (year === "2020") {
    const newExpense = expenses.filter((expense) => {
      return expense.date.getFullYear() === 2020;
    });

    if (newExpense.length === 0) {
      return <h3>No data Found for this Year. Start Adding .....</h3>;
    }

    return (
      <>
        {newExpense.map((expense) => {
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
      </>
    );
  } else if (year === "2021") {
    const newExpense = expenses.filter((expense) => {
      return expense.date.getFullYear() === 2021;
    });

    if (newExpense.length === 0) {
      return <h3>No data Found for this Year. Start Adding .....</h3>;
    }

    return (
      <>
        {newExpense.map((expense) => {
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
      </>
    );
  } else if (year === "2022") {
    const newExpense = expenses.filter((expense) => {
      return expense.date.getFullYear() === 2022;
    });

    if (newExpense.length === 0) {
      return <h3>No data Found for this Year. Start Adding .....</h3>;
    }

    return (
      <>
        {newExpense.map((expense) => {
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
      </>
    );
  }
};

export default ExpenseList;
