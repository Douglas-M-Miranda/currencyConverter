import { useEffect, useState } from "react";

export interface IcountrieCurrencies {
  result: string;
  documentation: string;
  terms_of_use: string;
  supported_codes: string[][];
  0: string;
  1: string
}

export const ApiListCurrencies = () => {
  const [countrieCurrencies, setCountriesCurrencies] = useState<IcountrieCurrencies[]>([])
  const apiKey = import.meta.env.VITE_EXCHANGE_API_KEY;

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/codes`)
      const data = await response.json();
      const currenciesData = data.supported_codes;
      setCountriesCurrencies(currenciesData);
    }
    fetchData()
  }, [])

  return (
    countrieCurrencies
  );
};
