import React from "react";
import styled from "styled-components";
import Card from "./Card";

type PopupProps = {
  category: string;
  items: { title: string; description: string; buttonText: string; photo: string; link: string }[];
  onClose: () => void;
};

const Popup: React.FC<PopupProps> = ({ category, items, onClose }) => {
  return (
    <StyledWrapper>
      <div className="popup">
        <div className="popup-header">
          <h2 className="text-2xl font-bold">{category}</h2>
          <button className="close-button" onClick={onClose}>
            ✕
          </button>
        </div>
        <div className="popup-content">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                description={item.description}
                buttonText={item.buttonText}
                photo={item.photo}
                link={item.link}
              />
            ))}
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  z-index: 50;
  display: flex;
  justify-content: center;
  align-items: center;

  .popup {
    background: white;
    border-radius: 10px;
    padding: 20px;
    max-width: 90%;
    max-height: 90%;
    overflow-y: auto;
  }

  .popup-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  .close-button {
    background: transparent;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

export default Popup;
