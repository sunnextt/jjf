import ExpirySession from "src/utils/expirysession";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      ExpirySession.get("access") ? (
        <Redirect to="/" />
      ) : (
        <Component {...props} />
      )
    }
  />
);

export default PublicRoute;
