import { useState } from 'react';

import Currencyform from './Currencyform';
import Exchangeboard from './Exchangeboard';

function Dashboard() {
  const [exchangeData, setExchangeData] = useState({
    currency: '',
    amount: '',
  });
  console.log(exchangeData);

  return (
    <div className='dashboard'>
      <h1>Currency Exchange App</h1>
      <Currencyform exchangeData={exchangeData} setExchangeData={setExchangeData} />
      <Exchangeboard exchangeData={exchangeData} />
    </div>
  );
}

export default Dashboard;
