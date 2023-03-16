import { useCounter, useFetch } from '../hooks';
import { Character, LoadingQuote } from './';

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);

    const { data, isLoading, hasError } = useFetch(`https://rickandmortyapi.com/api/character/${counter}`);

    const {name, image} = !!data && data; //Validando si existen valores

    return (
        <>
            <h1>Rick and Morty characters</h1>
            <hr />

            {
                isLoading ? 
                <LoadingQuote/> : 
                <Character name={name} image={image}/>
            }

            <button className="btn btn-outline-primary" onClick={() => increment()} disabled={isLoading}>
                Next character
            </button>


        </>
    )
}
