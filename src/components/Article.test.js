import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';
import Article from './Article';
import { render, screen, waitFor } from '@testing-library/react';

test('renders component without errors', ()=> {
    render(<Article article={[]}/>)
});

test('renders headline, author from the article when passed in through props', ()=> {
    render(<Article article={[
        {
        id: '1',
        headline: 'headline',
        author:'author'
        }
    ]}/>);

    const headline = screen.getByTestId('headline');
    const author = screen.getByTestId('author');

    expect(headline).toBeInTheDocument();
    expect(author).toBeInTheDocument();


});

test('renders "Associated Press" when no author is given', ()=> {
    render(<Article article={[ 
        {
        id: '1',
        headline: 'headline',
        }
    ]}/>);

    const ap = screen.queryByText(/Associated Press/i);

    expect(ap).toBeInTheDocument();
});

test('executes handleDelete when the delete button is pressed', async ()=> {
    const mockHandleDelete = jest.fn();

    render(<Article article={[]} handleDelete={mockHandleDelete} />);

    await waitFor(() => {
        const button = screen.getByTestId('deleteButton');
        userEvent.click(button);
        expect(mockHandleDelete).toHaveBeenCalled()
    })    
});

//Task List: 
//1. Complete all above tests. Create test article data when needed.