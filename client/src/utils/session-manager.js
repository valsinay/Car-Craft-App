import Cookie from 'universal-cookie';
const cookie = new Cookie();

const sessionManager = {
    save: (token, username) => {
        cookie.set('x-auth-token', token);
        cookie.set('username', username);
    },
    clear: () => {
        cookie.remove('x-auth-token')
        cookie.remove('username')
    },
    isLogged: () => {
        return cookie.get('x-auth-token') !== null
    },
    getUsername: () => {
        return cookie.get('username');
    }
}

export default sessionManager;