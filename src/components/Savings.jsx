export default function Savings() {
  return (
    <section className="savings">

      <div className="savings-header">
        <div>
          <p>Savings</p>
          <h2>₦120,000</h2>
        </div>

        <span className="savings-status">
          On Track
        </span>
      </div>

      <div className="savings-progress">

        <div className="progress-labels">
          <span>Current Savings</span>
          <span>₦200,000 Goal</span>
        </div>

        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: "60%" }}
          ></div>
        </div>

        <p className="progress-percentage">
          60% of your savings goal
        </p>

      </div>

    </section>
  );
}