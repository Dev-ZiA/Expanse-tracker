'use client'
import Header from '@/components/Header'
import Balance from '@/components/Balance'
import IncomeExpenses from '@/components/IncomeExpenses'
import History from '@/components/History'
import React, { useState } from 'react'

export default function Home() {

  const [expenses, setExpenses] = useState<any[]>([]);
  const [exp, setExp] = useState('');
  const [amount, setAmount] = useState('');

  const addExpense = () => {
    const transactionList = { id: expenses.length, name: exp, amount: amount };

    if (exp.length > 0) {
      setExpenses(prev => {
        return [...prev, transactionList];
      })
      setAmount('');
      setExp('');
    } else {
      alert('Please enter the Expense');
    }
  }

  const calculateBalance = () => {
    let sum = 0;
    for(let i = 0; i < expenses.length; i++){
      sum += +expenses[i].amount;
    }
    return sum;
  }

  const calculateIncome = () => {
    let income = 0;
    for(let i = 0; i < expenses.length; i++){
      if(expenses[i].amount > 0){
        income += +expenses[i].amount;}
      }
      return income;
    }

  const calculateExpense = () => {
    let expense = 0;
    for(let i = 0; i < expenses.length; i++){
      if(expenses[i].amount < 0){
      expense += +expenses[i].amount;}
    }
    return expense;
  }


  const deleteExp = (id: any) => {
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
              className={expense.amount > 0? "plus" : "minus"}>
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
