import DanielLogo from "../assets/react.svg";
import calculator from "../assets/vite.svg";

export default function Header() {
  return (
    <header className="header">

      <div className="header-brand">
        <h1>PersonalFinance</h1>

        <img
          src={DanielLogo}
          alt="Daniellabs logo"
          className="brand-logo"
        />
      </div>

      <div className="header-actions">
        <button
          className="calculator-button"
          type="button"
          aria-label="Open calculator"
        >
          <img
            src={calculator}
            alt="Calculator"
          />
        </button>
      </div>

    </header>
  );
}