import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

test('renders greeting', () => {
  render(<App />);
  const greetingElement = screen.getByText(/Hello user/i);
  expect(greetingElement).toBeInTheDocument();
});
