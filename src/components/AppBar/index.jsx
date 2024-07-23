import { AuthNav } from "../AuthNav";
import { Navigation } from "../Navigation";
import { UserMenu } from "../UserMenu";
import { useAuth } from ".../hooks";
import css from "./AppBar.module";

export const AppBar = () => {
    const { isLoggedIn } = useAuth();

    return (
        <header className={css.header}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    );
}