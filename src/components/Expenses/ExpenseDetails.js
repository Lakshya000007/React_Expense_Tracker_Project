import "./ExpenseDetails.css";

const ExpenseDetails = ({ title, location, amount }) => {
  return (
    <>
      <div className="expense-item__description">
        <h2>
          {title} | Location : {location}
        </h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </>
  );
};

export default ExpenseDetails;
