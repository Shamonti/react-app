import { useState } from 'react';
import Alert from './components/Alert';
import Button from './components/ButtonGroup';
import ListGroup from './components/ListGroup';
import './App.css';

function App() {
  let items = ['Dinajpur', 'Rangpur', 'Thakurgaon', 'Paharpur', 'Saidpur'];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [showAlert, setShowAlert] = useState(false);

  return (
    <div>
      <ListGroup
        items={items}
        heading='Cities'
        onSelectItem={handleSelectItem}
      />
      {/* <Alert>
        Hello <span>World</span>
      </Alert> */}
      {showAlert && (
        <Alert onClose={() => setShowAlert(false)}>
          <strong>Holy guacamole!</strong> You should check in on some of those
          fields below.
        </Alert>
      )}
      <Button onClick={() => setShowAlert(!showAlert)} color='warning'>
        Click Me
      </Button>
    </div>
  );
}

export default App;
