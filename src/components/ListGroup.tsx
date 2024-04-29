// import { Fragment } from 'react/jsx-runtime';

function ListGroup() {
  let items = ['Dinajpur', 'Rangpur', 'Thakurgaon', 'Paharpur', 'Saidpur'];
  // items = [];

  return (
    <>
      <h1>List</h1>
      {items.length == 0 && <p>No items found.</p>}
      <ul className='list-group'>
        {items.map(item => (
          <li
            key={item}
            className='list-group-item'
            onClick={() => console.log({ item })}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
