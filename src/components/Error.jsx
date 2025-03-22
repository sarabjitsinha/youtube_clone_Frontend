import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

function  Error(){
    const err=useRouteError()

    return(
        <div>
                <h1>{err.status}</h1>
                <h1>{err.statusText}</h1>
                <Link to="/">Return to home</Link>
        </div>
    )

}

export default Error;