// import { useEffect, useState } from "react";

// const useFetch = <T>(fetchFunction: () => Promise<T>, autoFetch = true) => {
//   const [data, setData] = useState<T | null>(null);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<Error | null>(null);

//   const fetchData = async () => {
//     try {
//       setLoading(true);
//       setError(null);

//       const result = await fetchFunction();

//       setData(result);
//     } catch (err) {
//       setError(
//         err instanceof Error
//           ? err
//           : new Error("An error occurred while fetching")
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   const reset = () => {
//     setData(null);
//     setError(null);
//     setLoading(false);
//   };

//   useEffect(() => {
//     if (autoFetch) {
//       fetchData();
//     }
//   }, []);

//   return { data, loading, error, reset, refetch: fetchData };
// };

// export default useFetch;

// import { useEffect, useState } from "react";

// function useFetch<T>(fetchFunction: () => Promise<T>, deps: any[] = []) {
//   const [data, setData] = useState<T | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<Error | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const result = await fetchFunction();
//         setData(result);
//         setError(null);
//       } catch (err: any) {
//         setError(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, deps);

//   return { data, loading, error };
// }

// // export default useFetch;
// import { useEffect, useState } from "react";

// const useFetch = <T>(
//   fetchFunction: () => Promise<T>,
//   deps: any[] = [],
//   autoFetch = true
// ) => {
//   const [data, setData] = useState<T | null>(null);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<Error | null>(null);

//   const fetchData = async () => {
//     try {
//       setLoading(true);
//       setError(null);
//       const result = await fetchFunction();
//       setData(result);
//     } catch (err) {
//       setError(
//         err instanceof Error
//           ? err
//           : new Error("An error occurred while fetching")
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   const reset = () => {
//     setData(null);
//     setError(null);
//     setLoading(false);
//   };

//   useEffect(() => {
//     if (autoFetch) {
//       fetchData();
//     }
//   }, deps); // refetch dacă dependențele se schimbă

//   return { data, loading, error, reset, refetch: fetchData };
// };

// export default useFetch;

// import { useEffect, useState } from "react";

// const useFetch = <T>(
//   fetchFunction: () => Promise<T>,
//   deps: any[] = [],
//   autoFetch = true
// ) => {
//   const [data, setData] = useState<T | null>(null);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<Error | null>(null);

//   const fetchData = async () => {
//     try {
//       setLoading(true);
//       setError(null);
//       const result = await fetchFunction();
//       setData(result);
//     } catch (err) {
//       setError(
//         err instanceof Error
//           ? err
//           : new Error("An error occurred while fetching")
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   const reset = () => {
//     setData(null);
//     setError(null);
//     setLoading(false);
//   };

//   useEffect(() => {
//     if (autoFetch) {
//       fetchData();
//     }
//   }, deps); // refetch dacă dependențele se schimbă

//   return { data, loading, error, reset, refetch: fetchData };
// };

// export default useFetch;

import { useEffect, useState } from "react";

const useFetch = <T>(fetchFunction: () => Promise<T>, autoFetch = true) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const result = await fetchFunction();

      setData(result);
    } catch (err) {
      setError(
        err instanceof Error
          ? err
          : new Error("An error occurred while fetching")
      );
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setData(null);
    setError(null);
    setLoading(false);
  };

  useEffect(() => {
    if (autoFetch) {
      fetchData();
    }
  }, []);

  return { data, loading, error, reset, refetch: fetchData };
};

export default useFetch;
