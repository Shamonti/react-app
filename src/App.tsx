import Alert from './components/Alert';
// import ListGroup from './components/ListGroup';

function App() {
  // let items = ['Dinajpur', 'Rangpur', 'Thakurgaon', 'Paharpur', 'Saidpur'];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  return (
    <div>
      {/* <ListGroup
        items={items}
        heading='Cities'
        onSelectItem={handleSelectItem}
      /> */}
      <Alert>
        Hello <span>World</span>
      </Alert>
    </div>
  );
}

export default App;
