export default function Savings({ transactions }) {

  let totalSavings = 0;
  let savingsGoal = 0;

  for (let transaction of transactions) {

    if (transaction.type === "savings") {
      totalSavings += Number(transaction.amount);
      savingsGoal = Number(transaction.savingsGoal)
    }
  }


  let savingsPercentage = (totalSavings / savingsGoal) * 100;


  return (
    <section className="savings">

      <div className="savings-header">

        <div>
          <p>Savings</p>

          <h2>
            ₦{totalSavings.toLocaleString()}
          </h2>
        </div>

        <span className="savings-status">
          {savingsPercentage >= 100
            ? "Goal Achieved"
            : savingsPercentage >= 40
            ? "Making Progress"
            : "Behind Schedule"}
        </span>

      </div>


      <div className="savings-progress">

        <div className="progress-labels">

          <span>
            Current Savings
          </span>

          <span>
            ₦{savingsGoal.toLocaleString()} Goal
          </span>

        </div>


        <div className="progress-bar">

          <div
            className="progress"
            style={{ width: `${savingsPercentage}%` }}
          ></div>

        </div>


        <p className="progress-percentage">
          {savingsPercentage}% of your savings goal
        </p>

      </div>

    </section>
  );
}

