import React from 'react';
import styled from 'styled-components';

const phoneWidth = 160;
const phoneHeight = 340;

const PhoneContainer = styled.div`
  position: fixed;
  top: 24px;
  right: 24px;
  width: ${phoneWidth}px;
  height: ${phoneHeight}px;
  background: #181f2a;
  border-radius: 28px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const EmojiGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(5, 1fr);
  gap: 18px;
  width: 80%;
  height: 80%;
`;

const EmojiButton = styled.button`
  background: rgba(30, 36, 48, 0.9);
  border: none;
  border-radius: 14px;
  width: 100%;
  height: 100%;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
  transform: scale(1);
  
  &:hover {
    background: #232b3a;
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
  
  &:active {
    transform: scale(0.95);
    background: #1a202c;
    box-shadow: 0 1px 4px rgba(0,0,0,0.1);
  }
`;

const emojis = [
  '😊', '🥰',
  '😎', '🤗',
  '😁', '✨',
  '🌟', '🎉',
  '😞', '😔',
];

const EmojiPanel = ({ onEmojiSelect }) => (
  <PhoneContainer>
    <EmojiGrid>
      {emojis.map((emoji, idx) => (
        <EmojiButton 
          key={idx} 
          aria-label={`emoji-${idx}`}
          onClick={() => onEmojiSelect(emoji)}
        >
          {emoji}
        </EmojiButton>
      ))}
    </EmojiGrid>
  </PhoneContainer>
);

export default EmojiPanel; 