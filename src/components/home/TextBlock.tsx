import React from 'react';
import "./textBlock.scss"

interface TextBlockProps {
  showFullText: boolean;
  toggleText: () => void;
}

const TextBlock: React.FC<TextBlockProps> = ({ showFullText, toggleText }) => {
  return (
    <div className={`text-block ${showFullText ? 'expanded' : ''}`}>
      <p>
        Bohemian Handmade Accessories was founded in summer 2017 by Kate J. Richards, who was a student of New York
        State Fine Arts Academy at the time. As Kate tells, she always had trouble finding a gift that would be as
        great as her friends, so she came up with the idea of crafting leather accessories by herself. As the latter
        aroused interest among the fellow students, Kate decided to start a handmade brand and sell the crafted items.
      </p>
      {showFullText && (
        <p>
          In 2018, Kate's best friend Annie joined her to help with brand PR and marketing strategies. During the next
          years, the team was expanded with two more designers, tailors, and marketers.
        </p>
      )}
      {showFullText && (
        <p>
          A usual workday at Bohemian starts with daily updates over a cup of tea or coffee. The team gets its daily
          tasks and heads over into a creative mess. Every Saturday, the doors of Bohemian are open to students,
          designers, tailors, and simply everyone curious about mastering the art of handcrafting.
        </p>
      )}
      <button onClick={toggleText}>{showFullText ? 'Hide' : 'See More'}</button>
    </div>
  );
};

export default TextBlock;

