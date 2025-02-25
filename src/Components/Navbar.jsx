import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark mb-3">
            <div className="container">

                <NavLink to="/" className={({ isActive }) => isActive ? "selected" : ""}>WikiCountries</NavLink >
            </div>
        </nav>
    );
}


export default Navbar;