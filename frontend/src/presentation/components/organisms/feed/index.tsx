// index.tsx
import React, { useCallback, useState } from 'react';
import { Container, Card, Button } from './styles';
import { useGetUsers } from '@/application/hooks/api/user';
import { useDislikeFeed, useLikeFeed } from '@/application/hooks/api/feedback';

export function FeedOrg(): JSX.Element {
  const { data } = useGetUsers();
  const { mutate: likeFeed } = useLikeFeed();
  const { mutate: dislikeFeed } = useDislikeFeed();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('left');
  const [startX, setStartX] = useState(0); 
  const [isDragging, setIsDragging] = useState(false);

  const handleNext = useCallback((direction: 'left' | 'right') => {
    if (direction === 'left') {
      likeFeed({ targetUserId: data?.data?.[currentIndex]?.id ?? 0 });
    } else {
      dislikeFeed({ targetUserId: data?.data?.[currentIndex]?.id ?? 0 });
    }
    setDirection(direction);
    setFadeOut(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (data?.data?.length ?? 0));
      setFadeOut(false);
    }, 500); 
  }, [data?.data, currentIndex]);
  
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
      {data && data?.data && (
        <Card 
        className={`${fadeOut ? 'fade-out' : ''} ${direction}`}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        >
          <img src={data?.data[currentIndex]?.profile_image} alt={data?.data[currentIndex]?.name} />
          <h3>{data?.data[currentIndex]?.name}</h3>
          <p>나이: {data?.data[currentIndex]?.age}</p>
          <p>성별: {data?.data[currentIndex]?.gender === 1 ? '남' : '여'}</p>
          <div>
          <Button onClick={() => handleNext('left')}>좋아요</Button>
          <Button className="dislike" onClick={() => handleNext('right')}>싫어요</Button>
          </div>
        </Card>
      )}
    </Container>
  );
}
