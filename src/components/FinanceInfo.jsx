export default function FinanceInfo() {
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
        >
          👁
        </button>
      </div>

      <div className="balance">
        <p>Total Balance</p>
        <h2>₦250,000.00</h2>
      </div>

      <div className="finance-summary">

        <div>
          <p>Income</p>
          <strong className="income">₦500,000</strong>
        </div>

        <div>
          <p>Expenses</p>
          <strong className="expense">₦180,000</strong>
        </div>

        <div>
          <p>Savings</p>
          <strong className="saving">₦120,000</strong>
        </div>

      </div>

    </section>
  );
}