import React, {useState} from 'react';

const Example = () => {
  const [change, setChange] = useState(true);
  return(
    <div>
      <button onClick={() => setChange(!change)}>
        Click Here!
      </button>
      {change ? <h1>Welcome to your death!</h1> : <h1>Are you ready to die?</h1>}
    </div>
  );
}

export default Example;