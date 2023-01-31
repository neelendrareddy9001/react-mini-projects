import createStore from "react-persist-store"

const initialState = {
    user : {
        name : 'Code with yd'
    },
    login : {
        token : 'xyz'
    }
};

const store = createStore(initialState, {storage : 'session', namespace : 'test'});

export const login = store("login");
export const user = store("user");
