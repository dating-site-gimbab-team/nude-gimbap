// index.tsx
import React, { useState } from 'react';
import { Container, Card, Button } from './styles';

interface User {
  id: number;
  gender: 'male' | 'female';
  name: string;
  age: number;
  profile_image: string;
}

const dummyData: User[] = [
  { id: 1, gender: 'male', name: 'John Doe', age: 25, profile_image: 'https://randomuser.me/api/portraits/men/1.jpg' },
  { id: 2, gender: 'female', name: 'Jane Doe', age: 23, profile_image: 'https://randomuser.me/api/portraits/women/1.jpg' },
  { id: 3, gender: 'male', name: 'James Smith', age: 30, profile_image: 'https://randomuser.me/api/portraits/men/2.jpg' },
  { id: 4, gender: 'female', name: 'Emily Clark', age: 28, profile_image: 'https://randomuser.me/api/portraits/women/2.jpg' },
  // ... Add 16 more dummy users here
];

export function FeedOrg(): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  const handleNext = () => {
    setFadeOut(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % dummyData.length);
      setFadeOut(false);
    }, 500); // Duration of the fade-out animation
  };

  return (
    <Container>
      {dummyData[currentIndex] && (
        <Card className={fadeOut ? 'fade-out' : ''}>
          <img src={dummyData[currentIndex].profile_image} alt={dummyData[currentIndex].name} />
          <h3>{dummyData[currentIndex].name}</h3>
          <p>Age: {dummyData[currentIndex].age}</p>
          <p>Gender: {dummyData[currentIndex].gender}</p>
          <div>
            <Button onClick={handleNext}>좋아요</Button>
            <Button onClick={handleNext}>싫어요</Button>
          </div>
        </Card>
      )}
    </Container>
  );
}
