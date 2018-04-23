import React from 'react';

// custom component names should begin with a capital letter
const Intro = (props) => {
  return (
    <p className="App-intro">
      {props.message}
    </p>
  );
}

export default Intro;
