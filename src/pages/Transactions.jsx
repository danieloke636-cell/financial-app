export default function Transactions({ transactions }) {
  return (
    <main className="transactions-page">

      {/* Page Header */}

      <div className="transactions-page-header">

        <div>
          <p>Finance</p>
          <h1>Transactions</h1>
        </div>

        <button
          className="download-btn"
          type="button"
        >
          ↓ Download Report
        </button>

      </div>


      {/* Filters */}

      <section className="transaction-filters">

        <div className="category-filter">

          <button
            type="button"
            className="active"
          >
            All
          </button>

          <button type="button">
            Income
          </button>

          <button type="button">
            Expenses
          </button>

          <button type="button">
            Savings
          </button>

        </div>


        <div className="filter-row">

          <select defaultValue="month">
            <option value="month">Month</option>
            <option value="week">Week</option>
            <option value="day">Day</option>
            <option value="custom">Custom</option>
          </select>


          <select defaultValue="august-2026">

            <option value="august-2026">
              August 2026
            </option>

            <option value="july-2026">
              July 2026
            </option>

            <option value="june-2026">
              June 2026
            </option>

          </select>


          <select defaultValue="all">

            <option value="all">
              All Types
            </option>

            <option value="food">
              Food
            </option>

            <option value="bills">
              Bills
            </option>

            <option value="transport">
              Transport
            </option>

            <option value="shopping">
              Shopping
            </option>

            <option value="entertainment">
              Entertainment
            </option>

            <option value="salary">
              Salary
            </option>

            <option value="freelance">
              Freelance
            </option>

            <option value="business">
              Business
            </option>

            <option value="investment">
              Investment
            </option>

          </select>

        </div>

      </section>


      {/* Transaction List */}

      <section className="transactions-list-page">

        <div className="transactions-list-header">
          <h2>Transactions</h2>

          <p>
            Your financial activity
          </p>
        </div>


        {transactions.map((transaction) => (

          <div
            className="transaction-row"
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

      </section>

    </main>
  );
}

