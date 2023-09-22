'use client'
import Header from '@/components/Header'
import Balance from '@/components/Balance'
import IncomeExpenses from '@/components/IncomeExpenses'
import History from '@/components/History'
import React, { useEffect, useState } from 'react'

export default function Home() {

  const [expenses, setExpenses] = useState<any[]>([]);
  const [exp, setExp] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    const apiUrl = `http://localhost:8000/expenses`;
    fetch(apiUrl, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => setExpenses(data))
      .catch(error => `Fatel Error`);

  }, [])

  const addExpense = () => {

    if (exp.length > 0) {

      const transactionList = { id: new Date(), name: exp, amount: amount };
      const apiUrl = `http://localhost:8000/expenses`;
      fetch(apiUrl,
        {
          method: "POST",
          headers: {
            "Content-type" : 'application/json'
          },
          body: JSON.stringify(transactionList)
        })
        .then(response => response.json())
        .then(data => {
          setExpenses(prev => {
            return [...prev, transactionList];
          })
        })
        .catch(error => `Fatel Error`);

      setAmount('');
      setExp('');
    } else {
      alert('Please enter the Expense');
    }
  }

  const calculateBalance = () => {
    let sum = 0;
    for (let i = 0; i < expenses.length; i++) {
      sum += +expenses[i].amount;
    }
    return sum;
  }

  const calculateIncome = () => {
    let income = 0;
    for (let i = 0; i < expenses.length; i++) {
      if (expenses[i].amount > 0) {
        income += +expenses[i].amount;
      }
    }
    return income;
  }

  const calculateExpense = () => {
    let expense = 0;
    for (let i = 0; i < expenses.length; i++) {
      if (expenses[i].amount < 0) {
        expense += +expenses[i].amount;
      }
    }
    return expense;
  }


  const deleteExp = (id: any) => {

    const apiUrl = `http://localhost:8000/expenses/${id}`;
    fetch(apiUrl, {
      method: 'DELETE'
    })
      .then(response => response.json())

      .catch(error => `Fatel Error`);

    setExpenses(prev => {
      return prev.filter((transactionList: any) => transactionList.id !== id);
    })
  }


  return (
    <>
      <h2>Expense Tracker</h2>

      <div className="container">
        <h4>Your Balance</h4>
        <h1 id="balance">${calculateBalance()}</h1>
        <div className="inc-exp-container">
          <div>
            <h4>Income</h4>
            <p id="money-plus" className="money plus">+${calculateIncome()}</p>
          </div>
          <div>
            <h4>Expense</h4>
            <p id="money-minus" className="money minus">-${-calculateExpense()}</p>
          </div>
        </div>

        <h3>History</h3>
        <ul id="list" className="list">
          {expenses.map((expense: any, key: any) => (
            <li key={key}
              className={expense.amount > 0 ? "plus" : "minus"}>
              {expense.name}
              <span>$ {expense.amount}</span>
              <span className='delete-btn'
                onClick={() => deleteExp(expense.id)}>x</span>
            </li>
          ))}
        </ul>

        <h3>Add new transactionList</h3>
        <form id="form">
          <div className="form-control">
            <label htmlFor="text">Text</label>
            <input
              type="text"
              value={exp}
              placeholder="Enter Expense..."
              onChange={(e) => setExp(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount <br />
              (negative - expense, positive - income)</label>
            <input
              type="number"
              value={amount}
              placeholder="Enter amount..."
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <span
            className="btn"
            onClick={() => addExpense()}>Add transactionList</span>
        </form>
      </div>
    </>
  )
}
