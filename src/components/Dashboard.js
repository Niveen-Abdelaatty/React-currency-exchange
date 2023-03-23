import { useState, useEffect } from 'react';
import { exchangeCurrency } from '../services/currencyExchangeApi';

import Currencyform from './Currencyform';

function Dashboard() {
  const [exchangeData, setExchangeData] = useState({
    currency: '',
    amount: '',
  });
  const [currencies, setCurrencies] = useState(null);

  const currency = exchangeData.currency;
  const amount = exchangeData.amount;

  const getCurrencies = async () => {
    const data = await exchangeCurrency();
    setCurrencies(data);
  };

  useEffect(() => {
    getCurrencies();
  }, []);

  console.log(currencies);

  return (
    <div className='dashboard'>
      <h1>Currency Exchange App</h1>
      <Currencyform
        exchangeData={exchangeData}
        setExchangeData={setExchangeData}
      />
    </div>
  );
}

export default Dashboard;
