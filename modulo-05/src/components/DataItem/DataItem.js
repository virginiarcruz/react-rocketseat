import React from 'react';

// import { Container } from './styles';

export default function DataItem({ children, label }) {
  return (
    <div>
      <small>{label}</small>
      {children}
    </div>
  );
}
