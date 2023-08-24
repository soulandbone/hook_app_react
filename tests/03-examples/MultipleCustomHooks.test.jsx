import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks';
import { useFetch } from '../../src/hooks/useFetch';
import { useCounter } from '../../src/hooks/useCounter';

useFetch

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Tests in <MultipleCustomHooks/>', () => { 

    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach(() => {
        jest.clearAllMocks();
    }
    );

    test('should show the component by default', () => { 

        useFetch.mockReturnValue({
            data:null,
            isLoading: true,
            hasError: null
        });


        render(<MultipleCustomHooks/>);

        expect(screen.getByText('Loading...'));
        expect(screen.getByText('Breaking Bad Quotes'));


        const nextButton = screen.getByRole('button', {name: 'Next Quote'});
        expect(nextButton.disabled).toBeTruthy();

 


     });


     test('should show a Quote', () => {  


        useFetch.mockReturnValue({
            data:[{author: 'Fernando', quote: 'Hola Mundo'}],
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHooks/>);

        expect(screen.getByText('Hola Mundo')).toBeTruthy();
        expect(screen.getByText('Fernando')).toBeTruthy();

        const nextButton = screen.getByRole('button', {name: 'Next Quote'});
        expect(nextButton.disabled).toBeFalsy();
      
     });



     test('should call the increment function', () => {  

           

        useFetch.mockReturnValue({
            data:[{author: 'Fernando', quote: 'Hola Mundo'}],
            isLoading: false,
            hasError: null
        });


        render(<MultipleCustomHooks/>);
        const nextButton = screen.getByRole('button', {name: 'Next Quote'});
        fireEvent.click(nextButton);

        expect(mockIncrement).toHaveBeenCalled();


      
     });



 })