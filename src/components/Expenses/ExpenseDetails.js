import "./ExpenseDetails.css";

const ExpenseDetails = ({ title, location, amount }) => {
  const handleClick = (e) => {
    const parent = e.target.parentElement.parentElement.parentElement;
    const child = e.target.parentElement.parentElement;
    console.log(parent);
    console.log(child);
    parent.removeChild(child);
  };

  return (
    <>
      <div className="expense-item__description">
        <h2>
          {title} | Location : {location}
        </h2>
        <div className="expense-item__price">${amount}</div>
        <button onClick={handleClick}>Delete Expense</button>
      </div>
    </>
  );
};

export default ExpenseDetails;
