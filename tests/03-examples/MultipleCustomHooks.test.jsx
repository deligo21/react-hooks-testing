import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks";

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

describe('pruebas en MultipleCustomHooks', () => {

    const mockIncrement = jest.fn();
    
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach( () => {
        jest.clearAllMocks();
    })

    test('debe de mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data:null,
            isLoading: true,
            hasError: null,
        });

        render(<MultipleCustomHooks/>);

        expect(screen.getByText('Loading...'));
        expect(screen.getByText('Rick and Morty characters'));

        const nextButton = screen.getByRole('button', {name: 'Next character'});
        expect(nextButton.disabled).toBeTruthy();

    });
    
    test('debe de mostrar un personaje', () => {

        useFetch.mockReturnValue({
            data: {name:'Rodrigo', image: 'http://images.example.com'},
            isLoading: false,
            hasError: null,
        });
        
        render(<MultipleCustomHooks/>);
        expect(screen.getByText('Rodrigo')).toBeTruthy();

        const nextButton = screen.getByRole('button', {name: 'Next character'});
        expect(nextButton.disabled).toBeFalsy();
    });

    test('debe de llamar la funcion de incrementar', () => {

        useFetch.mockReturnValue({
            data: {name:'Rodrigo', image: 'http://images.example.com'},
            isLoading: false,
            hasError: null,
        });

        render(<MultipleCustomHooks/>);
        const nextButton = screen.getByRole('button', {name: 'Next character'});
        fireEvent.click(nextButton);

        expect(mockIncrement).toHaveBeenCalled();
    });
});