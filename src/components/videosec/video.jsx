import React from 'react';
import './VideoDescription.css';

const VideoDescription = ({ videoUrl, description }) => {
  return (
    <div className="video-description-container top-div">
      <div className="video-description-text">
        <h1 className='video-text'>Solomon's Haven Talent Hub</h1>
        <p className='video-paragraph'>We are dedicated to unlocking potential,discovering purpose and transforming lives.</p>
      </div>
      <div className="video-description-video">
        <video width="100%" controls>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoDescription;
