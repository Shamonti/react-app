import { useState } from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <button
      type='button'
      onClick={() => setIsClicked(!isClicked)}
      style={{ padding: 0, backgroundColor: 'transparent', border: 0 }}
    >
      {isClicked ? <FaHeart size={30} color='red' /> : <FaRegHeart size={30} />}
    </button>
  );
};

export default Like;
