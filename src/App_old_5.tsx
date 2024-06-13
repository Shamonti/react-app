import { useState } from 'react';

const App = () => {
  const [pizza, setPizza] = useState({
    name: 'Cheese Pizza',
    toppings: ['Pepperoni', 'Capsicum'],
  });

  const handleClick = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, 'Cheese'] });
  };

  return (
    <div>
      <div>
        {pizza.toppings.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default App;
