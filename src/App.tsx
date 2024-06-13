import ExpandableText from './components/ExpandableText';
import { useState } from 'react';

const App = () => {
  const [children, setChildren] = useState(
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint perspiciatis temporibus quaerat nobis dolor sit amet consectetur adipisicing elit. Sint perspiciatis temporibus quaerat nobis'
  );
  const handleClick = () => {
    children.length > 10 ? setChildren(children.slice(0, 10)) : children;
  };

  return (
    <div>
      <ExpandableText onClick={handleClick}>{children}</ExpandableText>
    </div>
  );
};

export default App;
