import React, { useContext } from "react"
import {
    useNavigate,
    useLocation
} from "react-router-dom";
import { AuthContext, useAuth } from "./Auth";
export default function LoginPage() {
    const context = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const auth = useAuth();
    const from = location.state?.from?.pathname || "/";
    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const username = formData.get("username");
        const password = formData.get("password");
        auth.signin(username, password, () => {
            navigate(from, { replace: true });
        });
    }

    return (
        <div>
            <p>You must log in to view the page at {from}</p>
            { context.errors ? <span>{context.errors}</span> : null }
            <form onSubmit={handleSubmit}>
                <label>
                    Username: <input name="username" type="text" />
                </label>
                <label>
                    Password: <input name="password" type="text" />
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
