import React from "react";
import { useRouteError } from "react-router";

function Error() {
  const a = useRouteError();

  return (
    <div>
      <h1>Hello 404 Error</h1>
      <h1>Something went Wrong</h1>
      <h3>
        {a.statusText}:{a.status}
      </h3>
    </div>
  );
}

export default Error;
