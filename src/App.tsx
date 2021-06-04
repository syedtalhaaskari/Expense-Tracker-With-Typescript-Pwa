import { useContext, useState } from 'react';
import './App.css';
import Balance from './components/Balance';
import Header from './components/Header';
import History from './components/History';
import Transaction from './components/Transaction';
import { TransactionProvider } from "./ContextApi/transContext";
import { TransactionContext } from "./ContextApi/transContext";

function App() {
  let { transactions, addTransaction, deleteTransaction, updateTransaction } = useContext(TransactionContext);
  let amount = useState("");
  let desc = useState("");

  return (
    <TransactionProvider>
      <div className="container">
        <Header />
        <Balance transactions={transactions} />
        <History transactions={transactions} deleteTransaction={deleteTransaction} updateTransaction={updateTransaction} />
        <Transaction amount={amount} desc={desc} transactions={transactions} addTransaction={addTransaction} />
      </div>
    </TransactionProvider>
  );
}

export default App;