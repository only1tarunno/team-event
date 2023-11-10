import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import PropTypes from "prop-types";

const PvtRoutes = ({ children }) => {
  const { user, spiner } = useContext(AuthContext);

  const location = useLocation();

  if (spiner) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PvtRoutes;
PvtRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};
