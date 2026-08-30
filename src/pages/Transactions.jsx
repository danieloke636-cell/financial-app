import { useState } from "react";

export default function Transactions({ transactions }) {
  const today = new Date();

  const [activeFilter, setActiveFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("month");
  const [monthFilter, setMonthFilter] = useState(
    String(today.getMonth())
  );
  const [categoryFilter, setCategoryFilter] = useState("all");

  let filteredTransactions = transactions;
  let dateFilteredTransactions = filteredTransactions;

  if (activeFilter === "income") {
    filteredTransactions = transactions.filter(
      (transaction) => transaction.type === "income"
    );
  }

  if (activeFilter === "expense") {
    filteredTransactions = transactions.filter(
      (transaction) => transaction.type === "expense"
    );
  }

  if (activeFilter === "savings") {
    filteredTransactions = transactions.filter(
      (transaction) => transaction.type === "savings"
    );
  }

  if (categoryFilter !== "all") {
    filteredTransactions = filteredTransactions.filter(
      (transaction) => transaction.category === categoryFilter
    );
  }

  if (dateFilter === "month") {
    dateFilteredTransactions = filteredTransactions.filter(
      (transaction) => {
        const transactionDate = new Date(transaction.date);

        return (
          transactionDate.getMonth() === Number(monthFilter) &&
          transactionDate.getFullYear() === today.getFullYear()
        );
      }
    );
  }

  if (dateFilter === "week") {
    const startOfWeek = new Date(today);

    startOfWeek.setDate(today.getDate() - today.getDay());
    startOfWeek.setHours(0, 0, 0, 0);

    const endOfWeek = new Date(startOfWeek);

    endOfWeek.setDate(startOfWeek.getDate() + 7);

    dateFilteredTransactions = filteredTransactions.filter(
      (transaction) => {
        const transactionDate = new Date(transaction.date);

        return (
          transactionDate >= startOfWeek &&
          transactionDate < endOfWeek
        );
      }
    );
  }

  if (dateFilter === "day") {
    const todayString =
      today.getFullYear() +
      "-" +
      String(today.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(today.getDate()).padStart(2, "0");

    dateFilteredTransactions = filteredTransactions.filter(
      (transaction) => transaction.date === todayString
    );
  }

  if (dateFilter === "custom") {
    dateFilteredTransactions = filteredTransactions;
  }

  return (
    <main className="transactions-page">

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

      <section className="transaction-filters">

        <div className="category-filter">

          <button
            type="button"
            className={activeFilter === "all" ? "active" : ""}
            onClick={() => setActiveFilter("all")}
          >
            All
          </button>

          <button
            type="button"
            className={activeFilter === "income" ? "active" : ""}
            onClick={() => setActiveFilter("income")}
          >
            Income
          </button>

          <button
            type="button"
            className={activeFilter === "expense" ? "active" : ""}
            onClick={() => setActiveFilter("expense")}
          >
            Expenses
          </button>

          <button
            type="button"
            className={activeFilter === "savings" ? "active" : ""}
            onClick={() => setActiveFilter("savings")}
          >
            Savings
          </button>

        </div>

        <div className="filter-row">

          <select
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
          >
            <option value="month">Month</option>
            <option value="week">Week</option>
            <option value="day">Day</option>
            <option value="custom">Custom</option>
          </select>

          <select
            value={monthFilter}
            onChange={(e) => setMonthFilter(e.target.value)}
          >
            <option value="0">January</option>
            <option value="1">February</option>
            <option value="2">March</option>
            <option value="3">April</option>
            <option value="4">May</option>
            <option value="5">June</option>
            <option value="6">July</option>
            <option value="7">August</option>
            <option value="8">September</option>
            <option value="9">October</option>
            <option value="10">November</option>
            <option value="11">December</option>
          </select>

          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="all">All Types</option>
            <option value="food">Food</option>
            <option value="bills">Bills</option>
            <option value="transport">Transport</option>
            <option value="shopping">Shopping</option>
            <option value="entertainment">Entertainment</option>
            <option value="salary">Salary</option>
            <option value="freelance">Freelance</option>
            <option value="business">Business</option>
            <option value="investment">Investment</option>
          </select>

        </div>

      </section>

      <section className="transactions-list-page">

        <div className="transactions-list-header">
          <h2>Transactions</h2>
          <p>Your financial activity</p>
        </div>

        {dateFilteredTransactions.map((transaction) => (

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
                <h3>{transaction.description}</h3>

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