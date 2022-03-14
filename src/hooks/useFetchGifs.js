import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (categoria) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs(categoria)
        .then(imgs => {
            setTimeout(() => {
                console.log(imgs);
                setState({
                    data: imgs,
                    loading: false
                })
            }, 3000);
            
        });
    }, []);
    
    return state;
}
