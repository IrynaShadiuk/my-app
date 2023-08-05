import React, { useState } from "react";
import { IFeedback } from "../../../interfaces/feedback.dao";
import { calculateAge } from "./CalculareAge";

interface IProps {
  feedbacks: IFeedback[];
}

const FeedbackList = ({ feedbacks }: IProps) => {

  const [defaultFeedbacks] = useState<IFeedback[]>([
    {
      name: "John Doe",
      city: "New York",
      birthdate: "1990-05-15",
      comment: "Great store with excellent handmade products.",
    },
    {
      name: "Jane Smith",
      city: "Los Angeles",
      birthdate: "1985-11-03",
      comment: "Love the quality and unique designs.",
    },
  ]);


  const allFeedbacks = [...defaultFeedbacks, ...feedbacks];

  return (
    <div className="feedback-list">
      <h2>Feedbacks</h2>
      {allFeedbacks.length > 0 ? (
        <ul>
          {allFeedbacks.map((feedback, index) => (
            <li key={index}>
              <strong>{feedback.name}</strong> ({calculateAge(feedback.birthdate)})
              <br />
              <span>{feedback.city}</span>
              <br />
              <em>{feedback.comment}</em>
            </li>
          ))}
        </ul>
      ) : (
        <p>No feedbacks yet.</p>
      )}
    </div>
  );
};

export default FeedbackList;
