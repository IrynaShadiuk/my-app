import React, { useState, useEffect, useContext } from "react";
import FeedbackList from "./feedback-list/FeedbackList";
import FeedbackForm from "./feedback-form/FeedbackForm";
import { IFeedback } from "../../interfaces/feedback.dao";
import "./feedback.scss";
import { ThemeContext } from "../../../ThemeProvider";

const Feedbacks = () => {
  const { theme, toggleTheme } = useContext(ThemeContext) as any;

  const storageKey = "feedbacks";
  const storedFeedbacks = JSON.parse(localStorage.getItem(storageKey) || "[]");
  const [feedbacks, setFeedbacks] = useState<IFeedback[]>(storedFeedbacks);

  const updateFeedbacksList = (newFeedback: IFeedback) => {
    setFeedbacks((prevFeedbacks) => [...prevFeedbacks, newFeedback]);
  };

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(feedbacks));
  }, [feedbacks]);

  return (
    <div className={`feedback-page ${theme === 'dark' ? 'dark-theme' : ''}`}>
      <FeedbackForm updateFeedbacksList={updateFeedbacksList} />
      <FeedbackList feedbacks={feedbacks} />
      <div className="theme-box">
        <p>{theme}</p>
        <input 
          type="checkbox" 
          checked={theme === 'dark'} 
          onChange={toggleTheme} 
        />
      </div>
    </div>
  );
};

export default Feedbacks;

