import { useEffect, useRef } from "react";

function StrictModeComponent() {
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      console.log("Il componente è stato montato per la prima volta!");
      isMounted.current = true;
    }
  }, []);

  return <p>messaggio</p>;
}

export default StrictModeComponent;
