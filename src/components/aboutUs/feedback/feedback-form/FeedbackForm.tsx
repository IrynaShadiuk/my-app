import React, { useState } from "react";
import { IFeedback } from "../../../interfaces/feedback.dao";

interface IProps {
    updateFeedbacksList: (newFeedback: IFeedback) => void;
  }
  
  const FeedbackForm = ({ updateFeedbacksList }: IProps) => {
    const [name, setName] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [birthdate, setBirthdate] = useState<string>("");
    const [comment, setComment] = useState<string>("");
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const newFeedback: IFeedback = {
        name,
        city,
        birthdate,
        comment,
      };
      updateFeedbacksList(newFeedback);
      setName("");
      setCity("");
      setBirthdate("");
      setComment("");
    };
  
    return (
      <form className="feedback-form" onSubmit={handleSubmit}>
        <h2>Leave Your Feedback</h2>
        <input
          className="form-ft"
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="form-ft"
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          className="form-ft"
          type="date"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
        <textarea
          className="form-ft"
          id="feedback-input"
          placeholder="Your Feedback"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
        <button className="btn-sub" type="submit">
          Submit
        </button>
      </form>
    );
  };
  
  export default FeedbackForm;