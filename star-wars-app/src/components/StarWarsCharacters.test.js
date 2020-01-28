import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import { getData as mockGetData } from '../api/getData';
import StarWarsCharacters from './StarWarsCharacters';
import App from '../App';

jest.mock('../api');

test('next list called', () => {
  const { getByText } = render(<StarWarsCharacters />)
  const nextButton = getByText(/next/i);
  fireEvent.click(nextButton)
  wait(() => {
    expect(mockGetData).toHaveBeenCalledTimes(1)
})
})

test('previous list called', () => {
  const { getByText } = render(<StarWarsCharacters />)
  const previousButton = getByText(/previous/i);
  fireEvent.click(previousButton)
  wait(() => {
    expect(mockGetData).toHaveBeenCalledTimes(1)
})
})

test('render StarWarsCharacters', () => {
  render(<StarWarsCharacters />)
})

test('render App',() => {
  render(<App />)
})
