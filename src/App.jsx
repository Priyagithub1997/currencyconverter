import { useEffect, useState } from 'react'
import axios from 'axios';


function App() {
  const [Amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [convertedValue, setConvertedValue] = useState(0);
  const [exchangeRate, setExchangeRate] = useState("");

  
   
    const exchange = async () => {
      console.log("hello");
      try {
        let url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
        const response = await axios.get(url);
        console.log(response);

        setExchangeRate(response.data.rates[toCurrency]);


        if (exchangeRate !== null) {

          setConvertedValue((Amount * exchangeRate).toFixed(2));
    
        }




      } catch (err) {
        console.log("Error", err);
      }

    };











  return (
    <>
      <div className='container'>
        <div className='imagediv'>

        </div>
        <div className='converterdiv'>
          <hr></hr>
          <h2>Currency Converter</h2>
          <hr></hr>
          <div className='amountinput'>
            <label htmlFor='amount'>Enter Amount</label>
            <input id='amount' value={Amount} onChange={(e) => setAmount(e.target.value)}></input>
          </div>
          <div className='inputcontainer1'>
            <label htmlFor='fromcurrency'> From Currency</label>
            <select id="fromcurrency" value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
              <option value="USD">USD-United States Doller</option>
              <option value="EUR">EUR-Euro</option>
              <option value="GBP">GBP-British Pound Sterling </option>
              <option value="JPY">JPY-Japanese Yen</option>
              <option value="AUD">AUD-Australian Dollar</option>
              <option value="CAD">CAD-Canadian Dollar</option>
              <option value="CNY">CNY-Chinese Yuan</option>
              <option value="INR">INR-Indian Rupees</option>
              <option value="BRL">BRL-Brazilian real</option>
              <option value="ZAR">ZAR-South African Rane</option>

            </select>
          </div>
          <div className='inputcontainer2'>
            <label htmlFor='tocurrency'> To Currency</label>
            <select id="tocurrency" value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
              <option value="USD">USD-United States Doller</option>
              <option value="EUR">EUR-Euro</option>
              <option value="GBP">GBP-British Pound Sterling </option>
              <option value="JPY">JPY-Japanese Yen</option>
              <option value="AUD">AUD-Australian Dollar</option>
              <option value="CAD">CAD-Canadian Dollar</option>
              <option value="CNY">CNY-Chinese Yuan</option>
              <option value="INR">INR-Indian Rupees</option>
              <option value="BRL">BRL-Brazilian real</option>
              <option value="ZAR">ZAR-South African Rane</option>

            </select>
          </div>
<button onClick={exchange}>Convert</button>

          <div className='result'>
            <p>{Amount} {fromCurrency}is Equal to {convertedValue} {toCurrency}</p>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
