'use client'
import React, { useState } from "react";

const AddTransaction = ({addTrans}: any) => {

  const [historyitems, setitem] = useState('');

  const handleInput = () => {
    if (historyitems.length > 3) {
      addTrans(historyitems);
      setitem('');
    } else {
      alert('TAsk\'s length must be greater than 3');
    }
  }

  return (
    <>
      <div className="container">
        <h3>Add new transaction</h3>
        <form id="form">
          <div className="form-control">
            <label htmlFor="text">Text</label>
            <input
              type="text"
              placeholder="Enter text..."
              onChange={(e: any) => setitem(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount"
            >Amount <br />
              (negative - expense, positive - income)</label>
            <input
              type="number"
              placeholder="Enter amount..."
              onClick={() => handleInput()} />
          </div>
          <button className="btn">Add transaction</button>
        </form>
      </div>
    </>
  );
}
export default AddTransaction;