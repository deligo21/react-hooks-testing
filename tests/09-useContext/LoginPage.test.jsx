import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";
import { any } from "prop-types";

describe('pruebas en LoginPage', () => {

    test('debe de mostrar el componente sin el usuario', () => {

        render(
            <UserContext.Provider value = {{user:null}}>
                <LoginPage/>
            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('pre'); //aria-label
        expect(preTag.innerHTML).toBe('null');
    });

    test('debe de llamar el setUser cuando se hace click con el boton', () => {

        const setUserMock = jest.fn();

        render(
            <UserContext.Provider value = {{user: null, setUser: setUserMock}}>
                <LoginPage/>
            </UserContext.Provider>
        )

        const setUserButton = screen.getByRole('button');
        fireEvent.click(setUserButton);

        expect(setUserMock).toHaveBeenCalledWith({"email": "rod@gmail.com", "id": 123, "name": "Rodrigo"});
    });
});