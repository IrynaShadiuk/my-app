import React, { useState } from 'react';
import "./home.scss"
import image from '../img/home_img.jpg';
import TextBlock from './TextBlock';


const Home: React.FC = () => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className="home">
      <div className="text-container-1">
        <h1 className="home-title home-title_1">How we craft at Bohemian</h1>
        <br />
        <h5 className="home-title home-title_2">The story behind Bohemian</h5>
      </div>

      <div className="image-container">
        <img src={image} alt="Crafting" style={{ width: '50%' }} />

        <div className="image-caption">
          <div className="caption-background">
            <p>Crafting is my therapy.</p>
            <p>-- Kate J. Richards</p>
          </div>
        </div>
      </div>

      <div className="text-container-2">
        <TextBlock showFullText={showFullText} toggleText={toggleText} />
      </div>
    </div>
  );
};

export default Home;


