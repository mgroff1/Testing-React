import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import { getData as mockGetData } from '../api/getData';
import StarWarsCharacters from './StarWarsCharacters';

jest.mock('../api')

test('Goto new list', async () => {
    const { getByText } = render(<StarWarsCharacters/>);
    const previousButton = getByText(/Previous/i)
    const nextButton = getByText(/next/i)
    fireEvent.click(nextButton);
    fireEvent.click(previousButton);
    wait(() => {
        expect(mockGetData).toHaveBeenCalledTimes(2)
    },[])
})
