/**
 * @jest-environment jsdom
 */

import { act, renderHook } from '@testing-library/react';
import { useCounter } from "../../src/hooks/useCounter";

describe('Pruebas en useCounter', () => {

    test('debe de retornar los valores por defecto', () => {
        
        const {result} = renderHook( () => useCounter());
        const {counter, decrement, increment, reset} = result.current;

        expect(counter).toBe(10);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    });

    test('debe de generar el counter con el valor de 100', () => {

        const {result} = renderHook( () => useCounter(100) );
        const { counter } = result.current;

        expect(counter).toBe(100);
    });

    test('debe de incrementar el contador', () => {

        const {result} = renderHook( () => useCounter() );
        const { counter, increment } = result.current;

        act( ()=> {
            increment();
            increment(4);
        });

        expect(result.current.counter).toBe(15);
    });

    test('debe de decrementar el contador', () => {

        const {result} = renderHook( () => useCounter() );
        const { counter, decrement } = result.current;

        act( ()=> {
            decrement();
            decrement(2);
        });

        expect(result.current.counter).toBe(7);
    });

    test('debe de resetear el contador', () => {

        const {result} = renderHook( () => useCounter() );
        const { counter, reset, decrement } = result.current;

        act( ()=> {
            decrement();
            decrement(2);

            reset();
        });

        expect(result.current.counter).toBe(counter);
    });
})