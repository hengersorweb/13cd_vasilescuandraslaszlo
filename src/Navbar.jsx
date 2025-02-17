import React from "react";
import {Link, NavLink} from "react-router-dom"


const Navbar = (() =>{

    return(
        <div>
            <nav className="pa4 lh-copy">
                <Link className="f4 fw6 db green link dim" to='/'>Főoldal</Link>
                <NavLink className="f4 fw6 db green link dim" to='/ermesek'>Az olimpia érmesei</NavLink>
                <NavLink className="f4 fw6 db green link dim" to='/mermesek'>A magyar érmesek</NavLink>
            </nav>
        </div>
    )

}
)

export default Navbar