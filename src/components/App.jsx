import React, { useState } from 'react';
import { Statistics } from './Statistics/Statistics.jsx';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions.jsx';
import { Notification } from './Notification/Notification.jsx'; 
import { Section } from './Section/Section.jsx'; 

export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const countTotalFeedback = () => {
    return feedback.good + feedback.neutral + feedback.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((feedback.good / countTotalFeedback()) * 100);
  };

 const handleLeaveFeedback = (name) => {
   setFeedback((prevState) => ({ ...prevState, [name]: prevState[name] + 1 }));
  };

    const total = countTotalFeedback();
    const positiveFeedback = countPositiveFeedbackPercentage();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={feedback}
            onLeaveFeedback={handleLeaveFeedback} 
            />
            { total === 0 ? (
              <Notification message="There is no feedback"></Notification>) : (
              <Statistics
                good={feedback.good}
                neutral={feedback.neutral}
                bad={feedback.bad}
                total={total}
                positivePercentage={positiveFeedback}
            />)}
        </Section>        
      </>  
    );
}