import React, { useState } from 'react';

const UseStateBasics = () => {
  let [title, setTitle] = useState('useState Basic Example');
  const handleClick = () => {
    if(title === 'useState Basic Example'){
      setTitle('hello people');
    }else{
      setTitle('useState Basic Example');
    }
  };

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handleClick}>Change Title</button>
    </React.Fragment>
  );
};

export default UseStateBasics;
