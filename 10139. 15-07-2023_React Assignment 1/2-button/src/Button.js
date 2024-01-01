export function Button({ text, onClick }) {
    return (
        <>
            <button onClick={onClick}>
                <span>{text}</span>
            </button>
        </>
    );
}
