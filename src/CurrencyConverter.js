import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CurrencySelector from './CurrencySelector';

const CurrencyConverter = () => {
  const [rates, setRates] = useState({});
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [convertedAmount, setConvertedAmount] = useState(0);

  useEffect(() => {
    axios.get('https://api.exchangerate-api.com/v4/latest/USD')
      .then(response => {
        setRates(response.data.rates);
      });
  }, []);

  useEffect(() => {
    if (rates[fromCurrency] && rates[toCurrency]) {
      setConvertedAmount((amount * rates[toCurrency] / rates[fromCurrency]).toFixed(2));
    }
  }, [amount, fromCurrency, toCurrency, rates]);

  return (
    <div>
      <h1>Currency Converter</h1>
      <CurrencySelector
        currency={fromCurrency}
        setCurrency={setFromCurrency}
        rates={rates}
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <CurrencySelector
        currency={toCurrency}
        setCurrency={setToCurrency}
        rates={rates}
      />
      <h2>{convertedAmount} {toCurrency}</h2>
    </div>
  );
};

export default CurrencyConverter;
