import React, { useState, useEffect } from 'react';
import FilterBar from '../components/FilterBar';
import ExpenseTable from '../components/ExpenseTable';

const ExpenseList = ({ expenses, onDelete, onTogglePaid }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');
  const [width, setWidth] = useState(window.innerWidth);
  const [mode, setMode] = useState('Máy tính');

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = width < 768;

  useEffect(() => {
    setMode(isMobile ? 'Điện thoại' : 'Máy tính');
  }, [isMobile]);

  const filteredExpenses = expenses.filter((item) => {
    const matchesName = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCategory === 'Tất cả' || item.category === selectedCategory;
    return matchesName && matchesCat;
  });

  return (
    <div>
      <div>Chế độ: {mode}</div>
      <FilterBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div>Tìm thấy {filteredExpenses.length} khoản chi</div>
      {filteredExpenses.length === 0 ? (
        <div>Không có dữ liệu</div>
      ) : (
        <div className={`table-wrap ${isMobile ? 'mobile' : ''}`}>
          <ExpenseTable
            expenses={filteredExpenses}
            onDelete={onDelete}
            onTogglePaid={onTogglePaid}
          />
        </div>
      )}
    </div>
  );
};

export default ExpenseList;