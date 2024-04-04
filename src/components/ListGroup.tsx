// import { Fragment } from 'react/jsx-runtime';

function ListGroup() {
  const items = ['Dinajpur', 'Rangpur', 'Thakurgaon', 'Paharpur', 'Saidpur'];
  return (
    <>
      <h1>List</h1>
      <ul className='list-group'>
        {items.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
