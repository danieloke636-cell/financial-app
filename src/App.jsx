import "./App.css";
import { useState, useEffect } from "react";

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
  const [transactions, setTransactions] = useState(()=> {
    const savedTransactions = localStorage.getItem("transactions")

    if (savedTransactions) {
      return JSON.parse(savedTransactions)
    }
    return []
  });


  function addTransaction(transaction) {
    setTransactions((prevTransactions) => [...prevTransactions, transaction]);
  }

  useEffect(()=> {
    localStorage.setItem("transactions", JSON.stringify(transactions));},
    [transactions])
  return (
    <BrowserRouter>

      <Header />

      <Routes>

        {/* Dashboard */}

        <Route
          path="/"
          element={
            <>
              <FinanceInfo transactions={transactions} />
              <FinanceChart />
              <Savings transactions={transactions} />
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