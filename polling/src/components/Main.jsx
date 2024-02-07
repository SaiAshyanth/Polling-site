import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './main.css';

const PollApp = () => {
  const location = useLocation();
  const { question, options } = location.state || {};

  const [selectedOption, setSelectedOption] = useState(null); // Track selected option
  const [hasVoted, setHasVoted] = useState(false);

  const handleVote = (optionId, optionText) => {
    if (!hasVoted) {
      // Display a popup message here
      alert(`Thanks for voting for "${optionText}"!`);
      setSelectedOption(optionText); // Set selected option
      setHasVoted(true);
    } else {
      // Display a message indicating that the user has already voted
      alert('You have already voted. Thanks!');
    }
  };

  return (
    <div className="poll-container">
      <h1 className='abc'>{question}</h1>
      {hasVoted && selectedOption && <p>Yayyyy!! The winner is "{selectedOption}".</p>}
      <ul className="options-list">
        {options &&
          options.map((option, index) => (
            <li key={index}>
              <button
                className="def"
                onClick={() => handleVote(index + 1, option)}
                disabled={hasVoted}
              >
                {option}
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default PollApp;
