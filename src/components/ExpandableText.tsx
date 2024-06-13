interface Props {
  children: string;
  onClick: () => void;
  maxChars?: number;
}

const ExpandableText = ({ children, onClick, maxChars }: Props) => {
  return (
    <div>
      {children}
      <button type='button' onClick={onClick}>
        Show Less
      </button>
    </div>
  );
};

export default ExpandableText;
