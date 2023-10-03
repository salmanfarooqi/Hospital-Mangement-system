import { Link } from "react-router-dom";

function NotFound() {
    return (
        <>
            <h1>404 Error Page is not Found !!!</h1>

            <h2>Enter Valid link.</h2>

            <h3>
                <Link to={"/"}>Go to Home</Link>
            </h3>
        </>
    )
}

export default NotFound;