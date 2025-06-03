import { Link } from "react-router";
function header(){
    return(
        <header>
            <h1>Our Diagnosis</h1>
            <nav>
                <ul>
                    <Link to='/'>Home</Link>
                    <Link to='patients'>Patients</Link>
                </ul>                
            </nav>
        </header>
    );
}

export default header;