import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { getData as mockGetData } from '../api';
import App from '../App';
import StarWarsCharacters from './StarWarsCharacters';
jest.mock('../api');
test('render App',() => {
  render(<App />)
})

// test('render StarWarsCharacters', () => {
//   render(<StarWarsCharacters />)
// })
// test('check if data is called once initially ', () => {
//   mockGetData()
//   expect(mockGetData).toHaveBeenCalledTimes(1);
// })
//
// test('goto next', () => {
//   const { getByText } = render(<StarWarsCharacters />)
//   const nextButton = getByText(/next/i);
//   fireEvent.click(nextButton)
//   expect(mockGetData).toHaveBeenCalledTimes(1);
// })
//
// test('goto previous ', () => {
//   const { getByText } = render(<StarWarsCharacters />)
//   const previousButton = getByText(/previous/i);
//   fireEvent.click(previousButton)
//   expect(mockGetData).toHaveBeenCalledTimes(1);
// })
test('Goto new list', async () => {
    const { getByText } = render(<StarWarsCharacters/>);
    const previousButton = getByText(/Previous/i)
    const nextButton = getByText(/next/i)
    fireEvent.click(nextButton);
    fireEvent.click(previousButton);
    wait(() => {
        expect(mockGetData).toHaveBeenCalledTimes(1)
    },[])
})
