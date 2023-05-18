import axios from "axios";
const baseUrl = "https://my-json-server.typicode.com/rasu1ova/Server/clothes";

export const myApi = {
    async getMyData () {
        const repsonse = await axios.get(baseUrl)
        return repsonse.data
    },
}