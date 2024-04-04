// import { Fragment } from 'react/jsx-runtime';

function ListGroup() {
  let items = ['Dinajpur', 'Rangpur', 'Thakurgaon', 'Paharpur', 'Saidpur'];
  // items = [];

  return (
    <>
      <h1>List</h1>
      <ul className='list-group'>
        {items.length === 0 && <p>No item found.</p>}
        {items.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
