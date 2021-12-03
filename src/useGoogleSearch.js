import { useState, useEffect } from "react";
import API_KEY from "./keys";

//GOOGLE SEARCH ENGINE
const CONTEXT_KEY = "5ebfee8d0ec4dfd0e";

function useGoogleSearch(term) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => setData(result));
    };

    //console.log(data);

    fetchData();
    //debugger;
  }, [term]);
  return { data };
}

export default useGoogleSearch;
