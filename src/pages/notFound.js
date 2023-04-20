import React from "react";
import Error from "../components/shared/Error";
function NotFound() {
  return (
    <div data-testid="page-not-found">
      <Error
        code="404"
        description="Page Not Found"
        title="Not Found"
        to="home"
      />
    </div>
  );
}

export default NotFound;
