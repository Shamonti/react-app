import { useState } from 'react';
import produce from 'immer';

const App = () => {
  const [bugs, setBugs] = useState([
    { id: 1, title: 'Bug 1', fixed: false },
    { id: 2, title: 'Bug 2', fixed: false },
  ]);

  const handleClick = () => {
    setBugs(
      produce(draft => {
        const bug = draft.find(bug => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  };

  return (
    <div>
      {bugs.map((bug, index) => (
        <p key={index}>
          {bug.title}
          {bug.fixed ? 'True' : 'False'}
        </p>
      ))}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default App;
