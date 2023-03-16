import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe('pruebas en todoReducer', () => {

    const initialState = [{
        id: 1,
        description: 'Demo todo',
        done: false,
    }]

    test('debe de regresar el estado inicial', () => {
        const newState = todoReducer(initialState, {});
        expect(newState).toBe(initialState);
    });
    
    test('debe de agregar un todo', () => {

        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'Nuevo todo',
                done: false,
            }
        }
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
    });

    test('debe de eliminar un todo', () => {

        const action = {
            type: '[TODO] Remove Todo',
            payload: 1
        }
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(0);
    });

    test('debe de realizar el Toggle todo', () => {

        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1
        }
        const newState = todoReducer(initialState, action);
        expect(newState[0].done).toBeTruthy();
        
        const newState2 = todoReducer(newState, action);
        expect(newState2[0].done).toBeFalsy();
        
    });
});