import React, { useState } from 'react';
import SingleQuestion from './SingleQuestion';
import data from './data';

function App() {

   const [expandedQuestionId, setExpandedQuestionId] = useState(null);

  const handleQuestionToggle = (questionId) => {
    setExpandedQuestionId(prevId => (prevId === questionId ? null : questionId));
  };



  return (
    <main className="container">
      <h3>Question and answer about login</h3>
      <section  className="questions-container">
        {data.map(item => (
          <SingleQuestion
            key={item.id}
            {...item}
            expanded={expandedQuestionId === item.id}
            onToggle={() => handleQuestionToggle(item.id)}
          />
        ))}
      </section>
    </main>
  );
}

export default App;
