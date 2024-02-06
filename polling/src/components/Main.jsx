import React, { useState } from 'react';
import './main.css';

const PollApp = () => {
  const [options, setOptions] = useState([
    { id: 1, text: 'Option A', votes: 0 },
    { id: 2, text: 'Option B', votes: 0 },
    { id: 3, text: 'Option C', votes: 0 },
  ]);

  const [hasVoted, setHasVoted] = useState(false);

  const handleVote = (optionId) => {
    if (!hasVoted) {
      setOptions((prevOptions) =>
        prevOptions.map((option) =>
          option.id === optionId ? { ...option, votes: option.votes + 1 } : option
        )
      );
      setHasVoted(true);
      // Display a popup message here
      alert('Thanks for voting!');
    } else {
      // Display a message indicating that the user has already voted
      alert('You have already voted. Thanks!');
    }
  };

  return (
    <div className="poll-container">
      <h1 className='abc'>Enter your votes</h1>
      <ul className="options-list">
        {options.map((option) => (
          <li key={option.id}>
            <button className ="def"onClick={() => handleVote(option.id)}>{option.text}</button>
            <span>{option.votes} votes</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PollApp;