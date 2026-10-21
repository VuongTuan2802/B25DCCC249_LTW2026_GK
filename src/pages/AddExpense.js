import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES } from '../data';

const AddExpense = ({ expenses, onAddExpense }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [date, setDate] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || amount === '' || !date) {
      setErrorMsg('Vui lòng nhập đầy đủ thông tin phía dưới form');
      return;
    }

    const numAmount = Number(amount);

    if (!Number.isInteger(numAmount) || numAmount < 1000 || numAmount > 100000000) {
      setErrorMsg('Số tiền phải từ 1.000 đến 100.000.000');
      return;
    }

    const maxId = expenses.length > 0 ? Math.max(...expenses.map((item) => item.id)) : 0;
    const newId = maxId + 1;

    const newExpense = {
      id: newId,
      title: title.trim(),
      amount: numAmount,
      category,
      date,
      paid: false,
    };

    onAddExpense(newExpense);
    navigate('/expenses', { replace: true });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title-input">Tên khoản chi</label>
          <input
            id="title-input"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="amount-input">Số tiền</label>
          <input
            id="amount-input"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="category-select">Danh mục</label>
          <select
            id="category-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="date-input">Ngày chi</label>
          <input
            id="date-input"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        {errorMsg && <div>{errorMsg}</div>}
        <button type="submit">Thêm</button>
      </form>
    </div>
  );
};

export default AddExpense;