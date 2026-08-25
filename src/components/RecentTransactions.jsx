import { useNavigate } from "react-router-dom";

export default function RecentTransactions({ transactions }) {
  const navigate = useNavigate();

  return (
    <section className="recent-transactions">

      <div className="recent-transactions-header">

        <div>
          <p>Activity</p>
          <h2>Recent Transactions</h2>
        </div>

        <button
          className="view-all-btn"
          type="button"
          onClick={() => navigate("/transactions")}
        >
          View All
        </button>

      </div>


      <div className="transactions-list">

        {transactions.map((transaction) => (

          <div
            className="transaction"
            key={transaction.id}
          >

            <div className="transaction-info">

              <div className="transaction-icon">

                {transaction.type === "income"
                  ? "💼"
                  : transaction.type === "savings"
                  ? "💰"
                  : "🛒"}

              </div>


              <div>

                <h3>
                  {transaction.description}
                </h3>

                <p>
                  {transaction.category} • {transaction.date}
                </p>

              </div>

            </div>


            <strong
              className={
                transaction.type === "income"
                  ? "income"
                  : transaction.type === "savings"
                  ? "saving"
                  : "expense"
              }
            >

              {transaction.type === "income" ? "+" : "-"}₦
              {transaction.amount}

            </strong>

          </div>

        ))}

      </div>

    </section>
  );
}