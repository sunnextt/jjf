import ExpirySession from "src/utils/expirysession";
import { Route, Redirect } from "react-router-dom";

const PrivateRouter = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      ExpirySession.get("access") ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

export default PrivateRouter;
