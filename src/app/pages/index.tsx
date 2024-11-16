// src/pages/index.tsx
import React from 'react';

const HomePage: React.FC = () => {
  return <h1>Welcome to the Home Page</h1>;
};

// This is how you define a layout
HomePage.getLayout = (page: React.ReactNode) => {
  return <>{page}</>; // Example: wrapping with an empty layout
};

export default HomePage;
