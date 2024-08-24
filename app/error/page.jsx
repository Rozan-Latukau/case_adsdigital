// app/error/page.jsx
export default function ErrorPage({ error, reset }) {
    return (
        <div>
            <h1>Oops! Something went wrong.</h1>
            <p>{error?.message || 'An unknown error occurred.'}</p>
            <button onClick={() => reset()}>Try again</button>
        </div>
    );
}
