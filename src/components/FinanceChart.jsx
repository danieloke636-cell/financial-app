export default function FinanceChart() {
  return (
    <section className="finance-chart">

      <div className="finance-chart-header">
        <div>
          <p>Financial Activity</p>
          <h2>Income & Expenses</h2>
        </div>

        <select defaultValue="monthly">
          <option value="monthly">Monthly</option>
          <option value="weekly">Weekly</option>
        </select>
      </div>

      <div className="chart">

        <div className="chart-y-axis">
          <span>₦100k</span>
          <span>₦75k</span>
          <span>₦50k</span>
          <span>₦25k</span>
          <span>₦0</span>
        </div>

        <div className="chart-area">

          <div className="chart-grid">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="bars">

            <div className="bar-group">
              <div className="bar income-bar" style={{ height: "75%" }}></div>
              <div className="bar expense-bar" style={{ height: "35%" }}></div>
              <span>Jan</span>
            </div>

            <div className="bar-group">
              <div className="bar income-bar" style={{ height: "60%" }}></div>
              <div className="bar expense-bar" style={{ height: "30%" }}></div>
              <span>Feb</span>
            </div>

            <div className="bar-group">
              <div className="bar income-bar" style={{ height: "85%" }}></div>
              <div className="bar expense-bar" style={{ height: "45%" }}></div>
              <span>Mar</span>
            </div>

            <div className="bar-group">
              <div className="bar income-bar" style={{ height: "65%" }}></div>
              <div className="bar expense-bar" style={{ height: "40%" }}></div>
              <span>Apr</span>
            </div>

            <div className="bar-group">
              <div className="bar income-bar" style={{ height: "90%" }}></div>
              <div className="bar expense-bar" style={{ height: "50%" }}></div>
              <span>May</span>
            </div>

            <div className="bar-group">
              <div className="bar income-bar" style={{ height: "80%" }}></div>
              <div className="bar expense-bar" style={{ height: "45%" }}></div>
              <span>Jun</span>
            </div>

          </div>
        </div>

      </div>

      <div className="chart-legend">
        <div>
          <span className="legend-income"></span>
          Income
        </div>

        <div>
          <span className="legend-expense"></span>
          Expenses
        </div>
      </div>

    </section>
  );
}