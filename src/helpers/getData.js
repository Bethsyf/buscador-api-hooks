import axios from "axios"

export const getData = async (url) => {

    let { data } = await axios.get(url);


    return data
}