import React from 'react';
import { formatMoney } from '../data';

const Home = ({ expenses }) => {
  const totalCount = expenses.length;
  const totalAmount = expenses.reduce((sum, item) => sum + item.amount, 0);
  const totalUnpaid = expenses
    .filter((item) => !item.paid)
    .reduce((sum, item) => sum + item.amount, 0);

  return (
    <div>
      <h1>Chi tiêu cá nhân</h1>
      <div>Tổng số khoản chi: {totalCount}</div>
      <div>Tổng số tiền phải chi: {formatMoney(totalAmount)}</div>
      <div>Tổng số tiền chưa thanh toán: {formatMoney(totalUnpaid)}</div>
    </div>
  );
};

export default Home;