import { render, fireEvent } from '@testing-library/preact';
import { test, expect } from 'vitest';
import Header from 'src/layouts/Header';

test('Header renders without crashing', () => {
  render(<Header />);
});

test('Header opens and closes when button is clicked', () => {
  const { getByRole } = render(<Header />);
  const button = getByRole('button');

  fireEvent.click(button);

  expect(button).toHaveAttribute('aria-expanded', 'true');

  fireEvent.click(button);

  expect(button).toHaveAttribute('aria-expanded', 'false');
});