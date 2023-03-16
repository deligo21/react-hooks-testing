import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'deligo',
        email: 'rodrigo@gmail.com',
    })

    const {username, email} = formState;

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [ name ]: value,
        })
    }

    useEffect(() => {
        // console.log('Primer carga del useEffect');
    }, []); 

    useEffect(() => {
        // console.log('Cambio en el form');
    }, [formState]);

    useEffect(() => {
        // console.log('Cambio en el email');
    }, [email]);
    

    return (
        <>
            <h1>Simple Form</h1>
            <hr />

            <input 
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <input 
                type="email"
                className="form-control mt-2"
                placeholder="rodrigo@google.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            {
                (username === 'deligo2') && <Message/>
            }   

        </>
    )
}
