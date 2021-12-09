
import * as React from "react";
import { useLocation, Navigate } from "react-router-dom";

export const AuthContext = React.createContext(null);
export function useAuth() {
    return React.useContext(AuthContext);
}
export function UserConsumer() {
    return AuthContext.Consumer;
}
export function AuthProvider({ children, ...props }) {
    const [user, setUser] = React.useState(props.user || null);
    const [errors, setErrors] = React.useState(null);
    const signin = (username, password, callback) => {
        if(username == "rali" && password == "123") {
            setErrors(null)
            setUser(username);
            localStorage.setItem('user', username);
            callback();
        } else {
            setErrors("Wrong user or password")
        }
    };
    const signout = (callback) => {
        setUser(null);
        localStorage.removeItem('user');
        callback();
    };
    const value = { user, errors, signin, signout };
    return <AuthContext.Provider value={value} >{children}</AuthContext.Provider>;
}
export function RequireAuth({ children }) {
    const auth = useAuth();
    const location = useLocation();
    if ( ! auth.user) {
        return <Navigate to="/login" state={{ from: location }} />;
    }
    return children;
}

