import React, { useState, useEffect } from 'react'

const Calculate = () => {
  const [credit, setCredit] = useState(1000);
  const [bankRate, setBankRate] = useState(0.1);
  const [instalment, setInstalmetn] = useState(3);

  const [creditError,setCreditError]= useState(false);
  const [creditErrorMessage,setCreditErrorMessage] = ("");

  const [instalmentError,setInstalmetnError] = useState(false);
  const [instalmentErrorMessage,setInstalmetnErrorMessage] = useState("");

  const [bankRateError, setbBankErrot] = useState(false);
  const [bankRateErrorMessage, setBankErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault()
    const creditMonthly =
      (credit *
        ((bankRate * Math.pow(1 + bankRate / 100, instalment)) /
          (Math.pow(1 + bankRate / 100, instalment) - 1))) /
      100

      console.log(creditMonthly);
      const total = creditMonthly * instalment;
      console.log(total)
  }

  useEffect(()=>{
     if(credit > 150000) {
        setCreditError(true);
        setCreditErrorMessage('Max 150.000')
     
     if(credit < 1000){
       setCreditError(true);
       setCreditErrorMessage('Min 1000')
     }   

     }
  },[credit])

  useEffect(()=>{
    if(bankRate < 0){
      setbBankErrot(true);
      setBankErrorMessage('Min 0');

    }
  },[bankRate])

  useEffect(()=>{
    if(instalment > 48){
      setInstalmetnError(true);
      setInstalmetnErrorMessage('Max 48 instalment');
    }
    if(instalment <3){
      setInstalmetnError(true);
      setInstalmetnErrorMessage('Min 3 instalment');
    }
  },[instalment])
  return (
    <div className="calculate w-1/2 ">
      <form onSubmit={handleSubmit}>
        <div className="form">
          <p>Credit Amount</p>
          <div className="input-group flex  items-center ">
            <input type="number"  />
            
          </div>
        
        </div>
        <div className="form">
          <p>Pay instalment</p>
          <div className="input-group">
            <input type="number"  />
          </div>
        </div>
        <div className="form">
          <p>Bank Rate</p>
          <div className="input-group">
            <input type="number" />
          </div>
        </div>
        <div className="button-container bg-gray-150">
          <button type="submit ">Calculate</button>
        </div>
      </form>
    </div>
  )
}

export default Calculate
