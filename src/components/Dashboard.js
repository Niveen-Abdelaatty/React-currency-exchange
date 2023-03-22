import { useState } from 'react';

import Form from 'react-bootstrap/Form';

function Dashboard() {
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [userAmount, setUserAmount] = useState('');

  const dropdownMenuHandler = (e) => {
    setSelectedCurrency(e.target.value);
  };
  const userAmountHandler = (e) => {
    setUserAmount(e.target.value);
  };

  return (
    <div className='dashboard'>
      <h1>Currency Exchange App</h1>
      <Form className='Exchangeboard'>
        <div>
          <Form.Select
            style={{ width: '18rem' }}
            aria-label='Default select example'
            value={selectedCurrency}
            onChange={dropdownMenuHandler}
          >
            <option>Open this select menu</option>
            <option value='USD'>USD $ - US Dollar</option>
            <option value='CAD'>CAD $ - Canadian Dollar</option>
            <option value='EUR'>EUR - Euro</option>
          </Form.Select>
          <Form.Control
            style={{ width: '18rem' }}
            type='text'
            placeholder='Normal text'
            value={userAmount}
            onChange={userAmountHandler}
          />
          <p>{userAmount}</p>
          <p>{selectedCurrency}</p>
        </div>
        <div>
          <Form.Select
            style={{ width: '18rem' }}
            aria-label='Default select example'
          >
            <option>Open this select menu</option>
            <option value='USD'>USD $ - US Dollar</option>
            <option value='CAD'>CAD $ - Canadian Dollar</option>
            <option value='EUR'>EUR - Euro</option>
          </Form.Select>
          <Form.Control
            style={{ width: '18rem' }}
            type='text'
            placeholder='Normal text'
          />
        </div>
      </Form>
    </div>
  );
}

export default Dashboard;
