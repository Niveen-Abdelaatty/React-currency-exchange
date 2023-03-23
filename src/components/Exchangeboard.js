import { useState, useEffect } from 'react';

import { getCurrenciesApi } from '../services/currencyExchangeApi';

function Exchangeboard(props) {
  const { currency, amount } = props.exchangeData;

  const [currencies, setCurrencies] = useState(null);

  const getCurrencies = async () => {
    const res = await getCurrenciesApi();
    setCurrencies(res.data);
  };

  useEffect(() => {
    getCurrencies();
  }, []);

  // console.log(currencies);

  const loading = () => <h1>Loading...</h1>;

  const loaded = () => {

    return (
      <div>
        <h1>{currencies[currency] * amount} $</h1>
      </div>
    );
  };

  return currencies && currency !== '' && amount !== '' ? loaded() : loading();
}

export default Exchangeboard;
