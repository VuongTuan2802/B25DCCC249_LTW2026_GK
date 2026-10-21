import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { formatMoney } from '../data';

const ExpenseDetail = ({ expenses }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const expenseId = Number(id);
  const expense = expenses.find((item) => item.id === expenseId);

  if (isNaN(expenseId) || !expense) {
    return <div>Không tìm thấy khoản chi</div>;
  }

  const { title, amount, category, date, paid } = expense;

  return (
    <div>
      <div>Tên khoản chi: {title}</div>
      <div>Số tiền: {formatMoney(amount)}</div>
      <div>Danh mục: {category}</div>
      <div>Ngày: {date}</div>
      <div>Trạng thái: {paid ? 'Đã thanh toán' : 'Chưa thanh toán'}</div>
      <button onClick={() => navigate(-1)}>Quay lại</button>
    </div>
  );
};

export default ExpenseDetail;