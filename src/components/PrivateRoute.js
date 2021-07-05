import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  // assume that user is not login yet
  const isSignin = false;

  return (
    <>
      <Route
        {...rest}
        render={(props) =>
          isSignin ? <Component {...props} /> : <Redirect to="/signin" />
        }
      />
    </>
  );
};

export default PrivateRoute;