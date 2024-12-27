import React, { useEffect, useState } from 'react';
import styles from './Balance.module.css';  // CSS module kullanıyoruz.

const Balance = () => {
  // Geçici state tanımlamaları
  const [transactions, setTransactions] = useState([
    { id: 1, type: 'income', amount: 200 },
    { id: 2, type: 'expense', amount: 50 },
    { id: 3, type: 'income', amount: 150 },
    { id: 4, type: 'expense', amount: 30 }
  ]);
  
  const [isLoading, setIsLoading] = useState(false);  // Verinin yüklenip yüklenmediğini kontrol etmek için
  const [error, setError] = useState(null);  // Hata durumlarını göstermek için

  // Bakiye hesaplama işlemi
  const totalBalance = transactions.reduce((total, transaction) => {
    if (transaction.type === 'income') {
      return total + transaction.amount;
    } else if (transaction.type === 'expense') {
      return total - transaction.amount;
    }
    return total;
  }, 0);

  useEffect(() => {
    // Simülasyon için veri yüklendiğinde (Gerçek API yerine)
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false); // Yükleme tamamlandığında
    }, 1000);
  }, []);

  return (
  
    <div className={styles.BalanceContainer}>
      <div className={styles.BalanceTitleContainer}>
      <h2 className={styles.BalanceTitle}>YOUR BALANCE</h2>
      <p className={styles.TotalBalance}>
  {isLoading ? 'Loading...' : <><span className={styles.BalanceCurrency}>$</span> <span className={styles.Amount}>{totalBalance.toFixed(2)}</span></>}
</p>
        </div>
      {error && <p className={styles.Error}>Error: {error}</p>}
      </div>
     
  );
};

export default Balance;

