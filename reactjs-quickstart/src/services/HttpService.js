import { posts } from "../data/Posts";

class HttpService {
    get(url) {
        const promiseAction = (resolve) => {
            setTimeout(() => { resolve(posts); }, 2000);
        };

        return new Promise(promiseAction);
    }
}

const instance = new HttpService();
export default instance;