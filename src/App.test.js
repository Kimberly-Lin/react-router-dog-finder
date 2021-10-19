import App from './App';
import { render, screen } from '@testing-library/react';

test('renders without crashing', () => {
  render(<App />);
});
