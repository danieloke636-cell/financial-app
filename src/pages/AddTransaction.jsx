import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function AddTransaction({ addTransaction }) {
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState({
    id: crypto.randomUUID(),
    type: "expense",
    amount: "",
    description: "",
    category: "",
    date: "",
    paymentMethod: "",
    savingsGoal: "",
  });

  function handleAddTransaction() {
    if (
      !transaction.amount || 
      !transaction.description || 
      !transaction.category || 
      !transaction.date || 
      !transaction.paymentMethod
    ) {
      alert("Please fill in all fields");
      return;
    }

    addTransaction(transaction);
    navigate("/");
  }

  return (
    <main className="add-transaction-page">
      <div className="add-transaction-header">
        <button
          className="back-button"
          type="button"
          onClick={() => navigate("/")}
        >
          ←
        </button>

        <div>
          <p>Finance</p>
          <h1>Add Transaction</h1>
        </div>
      </div>

      <section className="transaction-form-card">
        {/* Transaction Type */}

        <div className="form-section">
          <h2>Transaction Type</h2>

          <div className="transaction-types">
            <button type="button" className={`transaction-type ${transaction.type === "income" ? "active" : "" }`} onClick={() => setTransaction({...transaction, type: "income"})}>
              <span>↓</span>
              Income
            </button>

            <button type="button" className={`transaction-type ${transaction.type === "expense" ? "active" : ""}`} onClick={() => setTransaction({...transaction, type: "expense"})}>
              <span>↑</span>
              Expense
            </button>

            <button type="button" className={`transaction-type ${transaction.type === "savings" ? "active" : ""}`} onClick={() => setTransaction({...transaction, type: "savings"})}>
              <span>◆</span>
              Savings
            </button>
          </div>
        </div>

        {/* Amount */}

        <div className="form-section">
          <label htmlFor="amount">Amount</label>

          <div className="amount-input">
            <span>₦</span>

            <input id="amount" type="number" placeholder="0.00" value={transaction.amount} onChange={(e) => setTransaction({...transaction, amount: e.target.value})} />
          </div>
        </div>

        {/* Description */}

        <div className="form-section">
          <label htmlFor="description">Description</label>

          <input
            id="description"
            type="text"
            placeholder="e.g. Freelance payment"
            value ={transaction.description}
            onChange= {(e)=> setTransaction({...transaction, description: e.target.value})} />
        </div>

        {/* Category */}

        <div className="form-section">
          <label htmlFor="category">Category</label>

          <select id="category" value={transaction.category} onChange={(e) => setTransaction({...transaction, category: e.target.value})}>
            <option value="">Select category</option>
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

        {/* Date */}

        <div className="form-section">
          <label htmlFor="date">Date</label>

          <input id="date" type="date" value={transaction.date} onChange={(e) => setTransaction({...transaction, date: e.target.value})} />
        </div>

        {/* Payment Method */}

        <div className="form-section">
          <label htmlFor="payment-method">Payment Method</label>

          <select id="payment-method" onChange={(e) => setTransaction({...transaction, paymentMethod: e.target.value})} value={transaction.paymentMethod}>
            <option value="">Select payment method</option>
            <option value="cash">Cash</option>
            <option value="bank">Bank Transfer</option>
            <option value="card">Card</option>
            <option value="wallet">Digital Wallet</option>
          </select>
        </div>

        { transaction.type === "savings" && (<div className="form-section">
          <label htmlFor="savingsGoal">Savings Goal</label>

                    <div className="amount-input">
            <span>₦</span>
            

          <input type="number" id="savingsGoal" placeholder="200,000" value={transaction.savingsGoal} onChange={(e)=> setTransaction({...transaction, savingsGoal:e.target.value})} />
        </div>
        </div>)}

        {/* Submit */}

        <button className="add-transaction-button" type="button" onClick={handleAddTransaction}>
          Add Transaction
        </button>
      </section>
    </main>
  );
}
