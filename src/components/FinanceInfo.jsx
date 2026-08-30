import { useState } from "react"
export default function FinanceInfo({transactions}) {

  const [visible, setVisible] = useState(true)

  let income = 0;
  let expense = 0;
  let saving = 0;

  for (let transaction of transactions) {
    if (transaction.type === "income") {
      income += Number(transaction.amount);
    } else if (transaction.type === "expense") {
      expense += Number(transaction.amount);
    } else if (transaction.type === "savings") {
      saving += Number(transaction.amount);
    }
  }

  let balance = income - expense - saving;

  function handleVisibility (){
    setVisible(!visible)
  }
  return (
    <section className="finance-info">

      <div className="finance-info-header">
        <div>
          <p>Financial Overview</p>
        </div>

        <button
          className="visibility-button"
          type="button"
          aria-label="Hide financial information"
          onClick={handleVisibility}
        >
          👁
        </button>
      </div>

      <div className="balance">
        <p>Total Balance</p>
        <h2>{visible ? `₦${ balance.toLocaleString() }` : "......."}</h2>
      </div>

      <div className="finance-summary">

        <div>
          <p>Income</p>
          <strong className="income">{visible ? `₦${income.toLocaleString()}` : "......"}</strong>
        </div>

        <div>
          <p>Expenses</p>
          <strong className="expense">{visible ? `₦${expense.toLocaleString()}` : "......"}</strong>
        </div>

        <div>
          <p>Savings</p>
          <strong className="saving">{visible ? `₦${saving.toLocaleString()}` : "......"}</strong>
        </div>

      </div>

    </section>
  );
}