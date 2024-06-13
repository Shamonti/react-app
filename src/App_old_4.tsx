import React, { useState } from 'react';

const App = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: 'John',
    },
  });

  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: 'Jonathan' } });
  };

  return (
    <div>
      <div>{game.player.name}</div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default App;
