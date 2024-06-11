import ListGroup from './components/ListGroup';

function App() {
  let items = ['Dinajpur', 'Rangpur', 'Thakurgaon', 'Paharpur', 'Saidpur'];

  return (
    <div>
      <ListGroup items={items} heading='Cities' />
    </div>
  );
}

export default App;
