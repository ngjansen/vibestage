import React from 'react';
import styled from 'styled-components';

const EmojiBarContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  background: #fff;
  border-top: 1px solid #eee;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 0;
  z-index: 1000;
  box-shadow: 0 -2px 8px rgba(0,0,0,0.04);
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  @media (min-width: 600px) {
    width: 400px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 16px 16px 0 0;
  }
`;

const EmojiButton = styled.button`
  background: none;
  border: none;
  font-size: 1rem;
  padding: 0 10px;
  cursor: pointer;
  outline: none;
  transition: transform 0.1s;
  border-radius: 8px;
  &:active {
    transform: scale(1.2);
    background: #f0f0f0;
  }
`;

const emojis = [
  '😊', '🥰', '😎', '🤗', '😁', '✨', '🌟', '🎉', '😞', '😔',
];

const EmojiPanel = ({ onEmojiSelect }) => (
  <EmojiBarContainer>
    {emojis.map((emoji, idx) => (
      <EmojiButton 
        key={idx} 
        aria-label={`emoji-${idx}`}
        onClick={() => onEmojiSelect(emoji)}
      >
        {emoji}
      </EmojiButton>
    ))}
  </EmojiBarContainer>
);

export default EmojiPanel; 