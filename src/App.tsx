import { useState } from 'react';
import ExpenseForm from './components/expense-tracker/components/ExpenseForm';
import ExpenseList from './components/expense-tracker/components/ExpenseList';

const App = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'Mango', amount: 200, category: 'Groceries' },
    { id: 2, description: 'Lichi', amount: 100, category: 'Groceries' },
    { id: 3, description: 'Jackfruit', amount: 200, category: 'Groceries' },
  ]);

  const addExpense = (data: {
    description: string;
    amount: number;
    category: string;
  }) => {
    const newExpense = {
      id: expenses.length + 1,
      ...data,
    };

    setExpenses(prevExpense => [...prevExpense, newExpense]);
  };

  return (
    <>
      <ExpenseForm onSubmit={addExpense} />
      <ExpenseList
        expenses={expenses}
        onDelete={id => setExpenses(expenses.filter(e => e.id !== id))}
      />
    </>
  );
};

export default App;
