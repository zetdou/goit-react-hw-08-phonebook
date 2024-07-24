import { AuthNav } from "../AuthNav";
import { Navigation } from "../Navigation";
import { UserMenu } from "../UserMenu";
import { useAuth } from "../../hooks";

export const AppBar = () => {
    const { isLoggedIn } = useAuth();

    return (
        <header>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    );
}