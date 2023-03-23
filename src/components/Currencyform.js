
import Form from 'react-bootstrap/Form';

function Currencyform(props) {
  const { exchangeData, setExchangeData } = props;

  const dropdownMenuHandler = (e) => {
    setExchangeData({ ...exchangeData, [e.target.name]: e.target.value });
  };
//   console.log(exchangeData.currency);

  const userAmountHandler = (e) => {
    setExchangeData({ ...exchangeData, [e.target.name]: e.target.value });
  };
//   console.log(exchangeData.amount);


  return (
    <Form className='Exchangeboard' value={exchangeData}>
      <div>
        <Form.Select
          style={{ width: '18rem' }}
          aria-label='Default select example'
          name='currency'
          value={exchangeData.currency}
          onChange={dropdownMenuHandler}
        >
          <option>Choose Currency</option>
          <option value='USD'>USD $ - US Dollar</option>
          <option value='CAD'>CAD $ - Canadian Dollar</option>
          <option value='EUR'>EUR - Euro</option>
        </Form.Select>
        <Form.Control
          style={{ width: '18rem' }}
          type='text'
          placeholder='Normal text'
          value={exchangeData.amount}
          name='amount'
          onChange={userAmountHandler}
        />
        <p>{exchangeData.amount}</p>
        <p>{exchangeData.currency}</p>
      </div>
    </Form>
  );
}

export default Currencyform;
