import "./App.css";
import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header";
import FinanceInfo from "./components/FinanceInfo";
import FinanceChart from "./components/FinanceChart";
import Savings from "./components/Savings";
import RecentTransactions from "./components/RecentTransactions";
import AddButton from "./components/AddButton";

import AddTransaction from "./pages/AddTransaction";
import Transactions from "./pages/Transactions";

export default function App() {
  const [transactions, setTransactions] = useState([]);


  function addTransaction(transaction) {
    setTransactions((prevTransactions) => [...prevTransactions, transaction]);
  }
  return (
    <BrowserRouter>

      <Header />

      <Routes>

        {/* Dashboard */}

        <Route
          path="/"
          element={
            <>
              <FinanceInfo />
              <FinanceChart />
              <Savings />
              <RecentTransactions transactions={transactions} />
              <AddButton />
            </>
          }
        />

        {/* Add Transaction */}

        <Route
          path="/add-transaction"
          element={<AddTransaction addTransaction={addTransaction} />}
        />

        {/* Transactions */}

        <Route
          path="/transactions"
          element={<Transactions transactions={transactions} />}
        />

      </Routes>

    </BrowserRouter>
  );
}