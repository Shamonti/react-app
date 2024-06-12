import { useState } from 'react';
// import styles from './ListGroup.module.css';
import styled from 'styled-components';
import { Md30Fps } from 'react-icons/md';

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${props => (props.active ? 'teal' : 'none')};
`;
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <h1>{heading}</h1>
      <Md30Fps color='blue' size='30' />
      {items.length == 0 && <p>No items found.</p>}
      <List style={{ backgroundColor: 'orange' }}>
        {items.map((item, index) => (
          <ListItem
            active={index === selectedIndex}
            key={index}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
