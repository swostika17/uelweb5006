import './App.css';
import React, { useEffect, useState } from 'react'; // Correct the import
import love from './Love.png';
import like from './like.png';
import Happy from './Happy.png';
import sad from './sad.png';

function EmojiCounter(props) {
  const [count, setCount] = useState(0);
  const [pic, setPic] = useState(like);

  useEffect(() => {
    if (props.pic === 'like') {
      setPic(like);
    } else if (props.pic === 'love') {
      setPic(love);
    } else if (props.pic === 'sad') {
      setPic(sad);
    }
  }, [props.pic]);

  const clickHandle = () => {
    setCount(count + 1);
  };

  return (
    <div className="emoji-counter-box">
      <p className="emoji-label">
        {props.pic}
        <span></span>
        <button onClick={clickHandle} className="emoji-button">
          Counter: {count}
          <img src={pic} alt="emoji" className="emoji-image" />
        </button>
      </p>
    </div>
  );
}

export default EmojiCounter;