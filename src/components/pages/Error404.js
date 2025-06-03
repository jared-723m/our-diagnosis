import { Link } from "react-router";

function Error404(){
    return(
        <main>
            <h1>Page Not found</h1>
            <Link to="/">Go back home</Link>
        </main>
    );
}

export default Error404;