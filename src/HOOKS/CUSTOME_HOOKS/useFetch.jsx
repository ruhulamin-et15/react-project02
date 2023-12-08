import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isloading, setIsloading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("fetching is not successful");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsloading(false);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setIsloading(false);
      });
  }, [url]);
  return { data, isloading, error };
};

export default useFetch;
