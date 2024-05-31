import React, { useEffect, useState } from "react";
//PENDING
const Errorboundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (hasError) {
      console.error("Error occurred within the ErrorBoundary");
    }
  }, [hasError]);

  if(hasError){
    return <>error</>
  }

  return children;
};

export default Errorboundary;
