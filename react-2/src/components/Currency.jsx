import React, { useState } from 'react'
import '../css/currency.css';
import { IoIosArrowDropright } from "react-icons/io";
import axios from 'axios';

let BASE_URL= "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = 'fca_live_DsfVEw9hyoPkUv4daP7B7k3Brf7ubTkM9IqJENWU'



function Currency() {

    const [amount, setAmount] = useState();
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency , setToCurrency] = useState('TRY');
    const [result, setResult] = useState(0);

    const  exchange = async() => {
        // console.log(amount);
        // console.log(fromCurrency);
        // console.log(toCurrency);

      const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`)
      const result = ((response.data.data[toCurrency])*amount).toFixed(2);
      setResult(result);
    }


  return (
    <div className='currency-div'>
      <div style={{fontFamily:'arial' , backgroundColor: 'black' , color:'#05' , width:'100%' , textAlign: 'center'}}>
        <h3 style={{color:'white'}}>DOVIZ  KURU UYGULAMASI</h3>
      </div>
      <div style={{marginTop: '25px'}}> 
            <input 
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"  className='amount'/>

            <select onChange={(e)=> setFromCurrency(e.target.value)} className='from-currency-option'>
                <option >USD</option>
                <option >EUR</option>
                <option >TR</option>
            </select>
            <IoIosArrowDropright style={{fontSize: '25px' , marginRight: '10px'}} />

            <select onChange={(e)=> setToCurrency(e.target.value)} className='to-currency-option'>
                <option>TL</option>
                <option>USD</option>
                <option>EUR</option>
            </select>

            <input value={result} onChange={(e) => setResult(e.target.value)} type="number" className='result'/>
      </div>
      <div>
        <button onClick={exchange} className='exchange-button'></button>
      </div>
    </div>
  )
}

export default Currency