export const Character = ({name, image}) => {
    return (
        <blockquote className="blockquote text-center">
            <img src={image} alt={name} />
            <footer className="blockquote-footer mt-3">{name}</footer>
        </blockquote>
    )
}
