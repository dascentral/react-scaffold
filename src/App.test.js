import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello world', () => {
  render(<App />);
  const htmlElement = screen.getByText(/Hello World/i);
  expect(htmlElement).toBeInTheDocument();
});
