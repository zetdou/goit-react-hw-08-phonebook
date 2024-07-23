import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
    const { isLoggedIn, isRefreshing } = useAuth();
    const shouldRedirect = !isLoggedIn && !isRefreshing;

    return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

PrivateRoute.propTypes = {
    component: PropTypes.node,
    redirectTo: PropTypes.string,
}