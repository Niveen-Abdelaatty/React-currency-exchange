import Form from 'react-bootstrap/Form';

function Currencyform(props) {
  const { exchangeData, setExchangeData } = props;

  const dropdownMenuHandler = (e) => {
    setExchangeData({ ...exchangeData, currency: e.target.value });
  };

  const userAmountHandler = (e) => {
    setExchangeData({ ...exchangeData, amount: e.target.value });
  };
  console.log(exchangeData);

  return (
    <Form className='exchangeform'>
      <div>
        <Form.Select
          style={{ width: '18rem' }}
          aria-label='Default select example'
          name='currency'
          onChange={dropdownMenuHandler}
        >
          <option>Choose Currency</option>
          <option value='USD'>USD - US Dollar</option>
          <option value='CAD'>CAD - Canadian Dollar</option>
          <option value='EUR'>EUR - Euro</option>
          <option value='EUR'>AUD - Australian Dollar</option>
          <option value='EUR'>RON - Romanian Leu</option>
          <option value='EUR'>TRY - Turkish Lira</option>
          <option value='EUR'>ZAR - South African Rand </option>
        </Form.Select>
        <Form.Control
          style={{ width: '18rem' }}
          type='text'
          placeholder='Normal text'
          name='amount'
          onChange={userAmountHandler}
        />
      </div>
    </Form>
  );
}

export default Currencyform;
