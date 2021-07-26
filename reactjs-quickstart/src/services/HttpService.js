import axios from "axios";

class HttpService {
    get(url) {
        return axios.get(url).then((response) => response.data);
    }
}

const instance = new HttpService();
export default instance;