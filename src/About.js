import logo from './logo.svg';
import { Link } from "react-router-dom";
import React, { useContext } from "react"
import { AuthContext, useAuth } from './Auth';
import { useNavigate, useLocation } from "react-router-dom";
export default function About(props) {
    const context = useContext(AuthContext)
    const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    function logoutHandler() {
        auth.signout(() => {
            navigate(from, { replace: true });
        });
    }
    return (
        <>
            <main>
                <h2>Welcome to the About page!</h2>
                <p>You can do this, I believe in you.</p>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
            <button onClick={logoutHandler}>Log out</button>
        </>
    );
}
