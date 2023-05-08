import "./ExpenseItem.css";

const ExpenseItem = () => {
  const expenseDate = new Date(2021, 2, 28);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 298.64;
  const LocationOfExpenditure = "Banglore";

  return (
    <div className="expense-item">
      <div>{expenseDate.toString()}</div>
      <div className="expense-item__description">
        <h2>
          {expenseTitle} | Location :- {LocationOfExpenditure}
        </h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;