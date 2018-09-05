import React from "react";
import {Link} from "react-router-dom";

function Header(){
    return(
        <div>
        <h1>BuzzHire Front-end assessment</h1>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/ex1">Exersice 1</Link>
            </li>
            <li>
                <Link to="/ex2">Exersice 2</Link>
            </li>
        </ul>
        </div>
    )
}
export default Header;