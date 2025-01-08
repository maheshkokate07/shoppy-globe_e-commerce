import { Link, useRouteError } from "react-router-dom"

function NotFound() {
    const err = useRouteError()
    return (
        <div className="not-found-container">
            <div className="not-found">
                <h2>OOPS!</h2>
                <h1>{err.status} {err.statusText}</h1>
                <h2>{err.data}</h2>
                <p>
                    <Link to="/">
                        Go back to home page
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default NotFound;