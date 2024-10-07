// index.tsx
import React, { useState } from 'react';
import { Container, Card, Button } from './styles';
import { dummyData } from "./data";

export function FeedOrg(): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('left');
  const [startX, setStartX] = useState(0); 
  const [isDragging, setIsDragging] = useState(false);

  const handleNext = (direction: 'left' | 'right') => {
    setDirection(direction);
    setFadeOut(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % dummyData.length);
      setFadeOut(false);
    }, 500); 
  };
// Handle touch and mouse start
const handleStart = (clientX: number) => {
    setStartX(clientX);
    setIsDragging(true);
  };

  // Handle touch and mouse end
  const handleEnd = (clientX: number) => {
    if (!isDragging) return;

    const diffX = startX - clientX;

    // If swipe distance is significant, trigger animation
    if (diffX > 50) {
      handleNext('left'); // Left swipe
    } else if (diffX < -50) {
      handleNext('right'); // Right swipe
    }

    setIsDragging(false);
  };

  // Handle touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches[0]) {
        const touch = e.touches[0];
        handleStart(touch.clientX);
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (e.changedTouches[0]) {
        const touch = e.changedTouches[0];
        handleEnd(touch.clientX);
    }
  };

  // Handle mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    handleStart(e.clientX);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    handleEnd(e.clientX);
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    // If the mouse leaves the card, stop dragging
    if (isDragging) handleEnd(e.clientX);
  };

  return (
    <Container>
      {dummyData[currentIndex] && (
        <Card 
        className={`${fadeOut ? 'fade-out' : ''} ${direction}`}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        >
          <img src={dummyData[currentIndex].profile_image} alt={dummyData[currentIndex].name} />
          <h3>{dummyData[currentIndex].name}</h3>
          <p>Age: {dummyData[currentIndex].age}</p>
          <p>Gender: {dummyData[currentIndex].gender}</p>
          <div>
          <Button onClick={() => handleNext('left')}>좋아요</Button>
          <Button className="dislike" onClick={() => handleNext('right')}>싫어요</Button>
          </div>
        </Card>
      )}
    </Container>
  );
}
