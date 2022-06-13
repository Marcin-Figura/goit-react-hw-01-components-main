import PropTypes from 'prop-types';
import {
  TransactionsTable,
  TransactionRow,
  TransactionsHeader,
  TransastionData,
} from './TransactionHistory.styles';

function getColorForEvenRows(index) {
  if (index % 2 === 1) {
    return '#ecf1f3';
  }
  return '#fff';
}

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionsTable className="transaction-history">
      <thead>
        <TransactionRow>
          <TransactionsHeader>Type</TransactionsHeader>
          <TransactionsHeader>Amount</TransactionsHeader>
          <TransactionsHeader last>Currency</TransactionsHeader>
        </TransactionRow>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }, index) => (
          <TransactionRow key={id}>
            <TransastionData color={getColorForEvenRows(index)}>
              {type}
            </TransastionData>
            <TransastionData color={getColorForEvenRows(index)}>
              {amount}
            </TransastionData>
            <TransastionData last color={getColorForEvenRows(index)}>
              {currency}
            </TransastionData>
          </TransactionRow>
        ))}
      </tbody>
    </TransactionsTable>
  );
};

TransactionHistory.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
