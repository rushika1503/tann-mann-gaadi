import React from 'react';
import './Thankyou.css';

const Thankyou = () => {
  return (
    <div className="thankyou-container">
      <div className="background-overlay"></div>
      <div className="thankyou-content">
        <h1>Thank You!</h1>
        <br />
        <p>
          I’m <strong>Rushika Sirigadde</strong>, a frontend developer with a Master’s in Information Studies.
          Thank you for approaching me with this opportunity. I'm truly happy to contribute to The Tann Mann Foundation's mission.
        </p>
        <p>
          View my portfolio:{" "}
          <a
            href="https://my-portfolio-git-main-rushikas-projects.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-link"
          >
            rushikas-portfolio
          </a>
        </p>
      </div>
    </div>
  );
};

export default Thankyou;
