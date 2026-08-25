import { useNavigate } from "react-router-dom";

export default function AddButton() {
  const navigate = useNavigate();

  return (
    <button
      className="add-button"
      onClick={() => navigate("/add-transaction")}
    >
      +
    </button>
  );
}