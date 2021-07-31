import React from 'react'

export default function Calculate() {
  return (
    <div className="calculate w-1/2 ">
      <form>
        <div className="form">
          <p>Credit Amount</p>
          <div className="input-group flex  items-center ">
            <input type="number" />
          </div>
        </div>
        <div className="form">
          <p>Pay instalment</p>
          <div className="input-group">
            <input type="number" />
          </div>
        </div>
        <div className="form">
          <p>Bank Rate</p>
          <div className="input-group">
            <input type="number" />
          </div>
        </div>
        <div className="button-container bg-gray-150">
          <button type="submit bg-gray-900">Calculate</button>
        </div>
      </form>
    </div>
  )
}
