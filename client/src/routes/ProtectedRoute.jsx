import { Navigate } from "react-router-dom";

function ProtectedRoute({ isAuth, children }) {
  if (!isAuth) {
    // If not authenticated, redirect to login
    return (
      <>
        <Navigate to="/auth" replace />;
      </>
    );
  }

  // If authenticated, render the protected component
  return children;
}

export default ProtectedRoute;
