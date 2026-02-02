import { useEffect, useRef, useState } from "react";
import { fetchProperties } from "../api/propertiesApi";

export function useProperties() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const requestIdRef = useRef(0);

  useEffect(() => {
    let isMounted = true;
    const currentRequestId = ++requestIdRef.current;

    setLoading(true);
    setError(null);

    fetchProperties()
      .then((data) => {
        if (isMounted && currentRequestId === requestIdRef.current) {
          setProperties(data);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message);
        }
      })
      .finally(() => {
        if (isMounted) {
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return { properties, loading, error };
}
