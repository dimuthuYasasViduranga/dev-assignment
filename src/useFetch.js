import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const abortController = new AbortController();

      const fetchData = async () => {
        try {
          const res = await fetch(url, { signal: abortController.signal });

          if(!res.ok) {
              throw Error('Cannot fetch data from the resource!');
          }

          const json = await res.json();
          setData(json);
          setIsPending(false); 
          setError(null);
        } catch (error) {
            if (error.name === 'AbortError') {
              console.log('fetch aborted')
            } else {
              setIsPending(false);
              setError(error.message);
            }
        }
      };
  
      fetchData();
      return () => abortController.abort();
    }, [url]);
  
    return { data, isPending, error };
};

export default useFetch;