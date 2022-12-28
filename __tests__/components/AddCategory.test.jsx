import { fireEvent, render, screen } from '@testing-library/react'
import { AddCategory } from '../../src/components/AddCategory'

describe('Test in <AddCategory/>', () => {
    
    test('Should change the text box value', () => {
        render( <AddCategory onNewCategory={() => {}}/> );
        const testCategory = 'dragon ball'
        const input = screen.getByRole('textbox');
        fireEvent.input( input, { target: { value: testCategory} });
        expect( input.value ).toBe(testCategory);
    })

    test('Should fire onNewCategory if the input has a value', () => {
        const onNewCategory = jest.fn();
        const inputValue = 'dragon ball';
        render( <AddCategory onNewCategory={onNewCategory}/> );
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input( input, { target: { value: inputValue} });
        fireEvent.submit( form );
        expect( input.value ).toBe('');

        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
    })

    test('Should not fire onNewCategory if the input is empty', () => {
        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory={onNewCategory}/> );
        const form = screen.getByRole('form');
        fireEvent.submit( form );
        expect( onNewCategory ).not.toHaveBeenCalled();
    })
})