import React from "react";
import styled from "styled-components";

type CardProps = {
  title: string;
  description: string;
  buttonText: string;
  photo: string;
  link: string;
};

const Card: React.FC<CardProps> = ({ title, description, buttonText, photo, link }) => {
  return (
    <StyledWrapper>
      <div className="flip-card">
        <div className="flip-card-inner">
          {/* Front Side - Shows Photo */}
          <div
            className="flip-card-front"
            style={{
              backgroundImage: `url(${photo})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          {/* Back Side - Shows Data */}
          <div className="flip-card-back">
            <p className="title">{title}</p>
            <p>{description}</p>
            <button className="apply-button" onClick={() => window.open(link, "_blank")}>
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .flip-card {
    background-color: transparent;
    width: 300px;
    height: 254px;
    perspective: 1000px;
    font-family: sans-serif;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border: 4px solid #005b6b;
    border-radius: 1rem;
  }

  .flip-card-front {
    background: #f5f5f5; /* Placeholder if photo doesn't load */
  }

  .flip-card-back {
    background-color: var(--customCyan, #005b6b); /* CustomCyan */
    color: white; /* Yellow text */
    transform: rotateY(180deg);
    padding: 1rem;
    gap: 0.5rem;
  }

  .title {
    font-size: 1.2em;
    font-weight: bold;
  }

  .apply-button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: bold;
    color: #fff;
    background-color: #004855;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .apply-button:hover {
    background-color: #ffcc00;
  }
`;

export default Card;
