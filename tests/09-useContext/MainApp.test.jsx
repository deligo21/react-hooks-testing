import { render, screen } from "@testing-library/react";
import { MainApp } from "../../src/09-useContext";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { routesConfig } from "../../src/Routes";

describe('pruebas en MainApp', () => {

    test('debe de mostrar el HomePage', () => {
        
        const router = createMemoryRouter(routesConfig, {
            initialEntries: ["/"],
        });
        render(<RouterProvider router={router} />);

        //ubicando elemento h1
        const head = screen.getByRole('heading',{level:1}).innerHTML;
 
        expect(head).toContain('Home Page:');
    });
    
    test('debe de mostrar el LoginPage', () => {
        
        const router = createMemoryRouter(routesConfig, {
            initialEntries: ["/login"],
        });
        render(<RouterProvider router={router} />);

        //ubicando elemento h1
        const head = screen.getByRole('heading',{level:1}).innerHTML;
 
        expect(head).toContain('Login Page');
    });
});