import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function useFetch(path) {
    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchData() {

            try {
                const { data } = await axios.get(path)
                console.log(data);
            } catch (error) {
                console.log(error);
            }

        }
    }, [path])

    return data
}

export default useFetch;