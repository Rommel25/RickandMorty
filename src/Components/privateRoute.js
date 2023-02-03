import { useSelector } from "react-redux";
import {redirect, Route} from "react-router-dom";


export function PrivateRoute({ children, ...rest }) {
    const user = useSelector((state) => state.user);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user ? (
                    children
                ) : (
                    <redirect
                        to={{
                            pathname: "/auth/login",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
}
export default PrivateRoute
