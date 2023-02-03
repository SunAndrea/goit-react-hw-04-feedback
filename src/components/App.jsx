import { useState } from 'react';

import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onGood = () => {
    setGood(prevState => prevState + 1);
  };

  const onNeutral = () => {
    setNeutral(prevState => prevState + 1);
  };

  const onBad = () => {
    setBad(prevState => prevState + 1);
  };

  const total = good + neutral + bad;
  const positivePercentage = Math.ceil((good * 100) / total) + '%';
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions onGood={onGood} onNeutral={onNeutral} onBad={onBad} />
      </Section>

      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedbackd" />
        )}
      </Section>
    </>
  );
};
