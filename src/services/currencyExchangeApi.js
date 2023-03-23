import axios from 'axios';

export const exchangeCurrency = async () => {
  const api_key = '9Wp94U3v8PwxfcEnNJV0TgKwL4XB4EJ0WTaAFEok';
  
  const url = `https://api.freecurrencyapi.com/v1/latest?apikey=${api_key}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
