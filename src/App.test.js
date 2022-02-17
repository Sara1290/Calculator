import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


//running out of time - write a unit test even though incomplete 
test('adds two numbers', () => {
  firstINT(24) + secondINT(44)
  expect(solution).toBe(68)
})