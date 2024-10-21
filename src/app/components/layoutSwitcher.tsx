// components/LayoutSwitcher.tsx
import React from 'react';

interface LayoutSwitcherProps {
  setLayout: (layout: 'empty' | 'dense') => void;
}

const LayoutSwitcher: React.FC<LayoutSwitcherProps> = ({ setLayout }) => {
  return (
    <div>
      <button onClick={() => setLayout('empty')}>Main Layout</button>
      <button onClick={() => setLayout('dense')}>Admin Layout</button>
    </div>
  );
};

export default LayoutSwitcher;
