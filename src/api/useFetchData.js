import { useState, useEffect } from 'react';

export const useFetchData = ({baseUrl, options}) => {
  const [ data, setData ] = useState({});
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(baseUrl, options);
        const data = await response.json();
        setData(data);
        console.log("🚀 data", data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    fetchData();
  }, [ baseUrl, options]);

  return [ data, loading ];
}
