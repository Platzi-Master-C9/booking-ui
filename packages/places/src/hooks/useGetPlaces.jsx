import { useEffect, useState } from 'react';

const URL = 'http://localhost:3000/api/places';

const useGetPlaces = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    fetch(URL)
      .then((Response) => Response.json())
      .then((data) => setData(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [URL]);

  return { data, loading, error };
};

export { useGetPlaces };
