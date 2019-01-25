import React from 'react';

const Joke = props => {
  return (
    <div className="joke">
      <h3>{props.joke}</h3>      
    </div>
  );
};

// Joke.defaultProps = {
//   joke: ''  
// };

export default Joke;

