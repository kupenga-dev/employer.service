import { useAuth } from "hooks/useAuth";
import { Navigate, Outlet, useLocation } from "react-router-dom";



const RequireAuth = ({ allowedRoles }) => {
    const location = useLocation();
    const { auth } = useAuth();

    
    return 
}

export default RequireAuth;