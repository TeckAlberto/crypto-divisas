import { ChangeEvent, FormEvent, useState } from "react";
import { currencies } from "../data"; 
import { useCryptoStore } from "../store";
import { Pair } from "../types";
import ErrorMessage from "./ErrorMessage";

export default function CriptoSearchForm() {

  const { cryptoCurrencies, fetchData } = useCryptoStore();
  const [ pair, setPair ] = useState<Pair>({
    currency: '',
    cryptoCurrency: ''
  });
  const [ error, setError ] = useState('');

  const handleChange = ( e: ChangeEvent<HTMLSelectElement>) => {
    
    setPair({
      ...pair,
      [e.target.name]: e.target.value 
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(Object.values(pair).includes('')) {
      setError('All fields are required');
      return;
    }
    setError('');
    // fetch the API
    fetchData(pair);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <div className="field">
        <label htmlFor="currency">Divisa:</label>
        <select
          name="currency"
          id="currency"
          value={pair.currency}
          onChange={handleChange}
        >
          <option value="">-- Seleccione una opcion --</option>
          {currencies.map((currency) => (
            <option value={currency.code} key={currency.code}>
              {currency.name}
            </option>
          ))}
        </select>

        <div className="field">
          <label htmlFor="cryptoCurrency">Cryptocurrency:</label>
          <select
            name="cryptoCurrency"
            id="cryptoCurrency"
            value={pair.cryptoCurrency}
            onChange={handleChange}
          >
            <option value="">-- Seleccione una opcion --</option>
            {cryptoCurrencies.map((crypto) => (
              <option
                key={crypto.CoinInfo.FullName}
                value={crypto.CoinInfo.Name}
              >
                {crypto.CoinInfo.FullName}
              </option>
            ))}
          </select>
        </div>
      </div>

      <input type="submit" value="Quotation" />
    </form>
  );
}
