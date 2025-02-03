import { useEffect, useState } from "react";

const useCurrency = (currency) => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`https://open.er-api.com/v6/latest/${currency}`)
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
      console.log(data);
    }, [currency]);
    console.log(data);
  return data;
};

export default useCurrency;
