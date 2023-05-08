import "./ExpenseItem.css";

const ExpenseItem = ({ title, amount, date, location }) => {
  // const expenseDate = new Date(2021, 2, 28);
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = 298.64;
  // const LocationOfExpenditure = "Banglore";

  return (
    <div className="expense-item">
      <div>{date.toString()}</div>
      <div className="expense-item__description">
        <h2>
          {title} | Location : {location}
        </h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
