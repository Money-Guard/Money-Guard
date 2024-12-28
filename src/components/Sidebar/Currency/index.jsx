import React, { useEffect, useState } from "react";
import styles from "./Currency.module.css";

const CurrencyTab = () => {
  const [currencies, setCurrencies] = useState([]);
  const STORAGE_KEY = "currencyData";
  const ONE_HOUR = 60 * 60 * 1000; // 1 saat (milisaniye cinsinden)

  useEffect(() => {
    const fetchCurrencies = async () => {
      const storedData = localStorage.getItem(STORAGE_KEY);
      const now = new Date().getTime(); // Geçerli zaman (milisaniye)

      if (storedData) {
        const { data, timestamp } = JSON.parse(storedData);

        if (now - timestamp < ONE_HOUR) {
          console.log("LocalStorage'dan veri alınıyor.");
          setCurrencies(data);
          return;
        }
      }

      try {
        console.log("API'den veri alınıyor...");
        const response = await fetch("https://api.monobank.ua/bank/currency");
        const apiData = await response.json();
        const filteredData = filterCurrencies(apiData);

        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({ data: filteredData, timestamp: now })
        );

        setCurrencies(filteredData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCurrencies();
  }, []);

  const filterCurrencies = (data) => {
    return data.filter(
      (item) =>
        (item.currencyCodeA === 840 && item.currencyCodeB === 980) || // USD
        (item.currencyCodeA === 978 && item.currencyCodeB === 980)   // EUR
    );
  };

  return (
    <div className={styles.CurrencyTab}>
     
      <table className={styles.CurrencyTable}>
        <thead className={styles.CurrencyTableHeader}>
          <tr className={styles.CurrencyTitle}>
            <th className={styles.CurrencyTableCell}>Currency</th>
            <th className={styles.CurrencyTableCell}>Purchase</th>
            <th className={styles.CurrencyTableCell}>Sale</th>
          </tr>
        </thead>
        <tbody className={styles.CurrencyTableBody}>
          {currencies.map((currency) => (
            <tr key={currency.currencyCodeA} className={styles.CurrencyTableRow}>
              <td className={styles.CurrencyValueCell}>
                {currency.currencyCodeA === 840 ? "USD" : "EUR"}
              </td >
              <td className={styles.CurrencyValueCell}>
                {currency.rateBuy.toFixed(2)}
              </td>
              <td className={styles.CurrencyValueCell}>
                {currency.rateSell.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CurrencyTab;
