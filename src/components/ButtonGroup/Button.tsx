// import styled from 'styled-components';
import styles from './Button.module.css';

interface Props {
  children: string;
  color?: 'primary' | 'secondary' | 'warning';
  onClick: () => void;
}

// const ButtonStyle = styled.button`
//   background-color: yellow;
//   padding: 10px 25px;
//   border: none;
//   border-radius: 3px;
//   font-size: 16px;
// `;

const Button = ({ children, onClick, color = 'primary' }: Props) => {
  return (
    <button
      type='button'
      className={[styles.btn, styles['btn-primary']].join(' ')}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
