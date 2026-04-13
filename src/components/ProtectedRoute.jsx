import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, allowedRole }) {

  const role = localStorage.getItem("role");
  const isAuth = localStorage.getItem("isAuthenticated");

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  if (role !== allowedRole) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;