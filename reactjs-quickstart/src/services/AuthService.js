import { action, makeObservable, observable} from 'mobx';

class AuthService {
    authInfo = null;

    constructor(authInfo) {
        makeObservable(this, {
            authInfo: observable,
            login: action,
            logout: action
        });
    }

    login = () => {
        this.authInfo = {
            fullName: 'Bayardo Josué López',
            givenName: 'Bayardo',
            permissions: [
                'admin'
            ]
        };
    };

    logout = () => this.authInfo = null;
}

const instance = new AuthService();
export default instance;