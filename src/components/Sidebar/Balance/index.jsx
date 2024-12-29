import React, { useEffect, useState } from 'react';
import styles from './Balance.module.css';

const Balance = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, type: 'income', amount: 24000 },
  ]);
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const totalBalance = transactions.reduce((total, transaction) => {
    if (transaction.type === 'income') {
      return total + transaction.amount;
    } else if (transaction.type === 'expense') {
      return total - transaction.amount;
    }
    return total;
  }, 0);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className={styles.balanceContainer}>
      <h2 className={styles.balanceTitle}>YOUR BALANCE</h2>
      <p className={styles.balanceAmount}>
        {isLoading ? (
          'Loading...'
        ) : (
          <>
            <span className={styles.currencySymbol}>₴</span>
            <span className={styles.amount}>
              {totalBalance.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </>
        )}
      </p>
      {error && <p className={styles.error}>Error: {error}</p>}
    </div>
  );
};

export default Balance;

