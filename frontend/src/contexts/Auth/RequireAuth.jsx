import { useContext } from "react";
import { Login } from "../../pages/Login";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import { Home } from "../../pages/Home";

export const RequireAuth = ({ role, children }) => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    if (!auth.user) {
        navigate("/login");
        return <Login />;
    }
    if (auth.user.role >= role) {
        return children;
    }else {
        return <Home />;
    }

}