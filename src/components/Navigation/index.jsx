import { NavLink } from "react-router-dom";
import css from "./Navigation.module";
import { useAuth } from "../../hooks";

export const Navigation = () => {
    const { isLoggedIn } = useAuth();

    return (
        <nav>
            <NavLink className={css.link} to="/">
                Home 
            </NavLink>
            {isLoggedIn && (
                <NavLink className={css.link} to="/contatcs">
                    <Contacts></Contacts>
                </NavLink>
            )}
        </nav>
    );
};