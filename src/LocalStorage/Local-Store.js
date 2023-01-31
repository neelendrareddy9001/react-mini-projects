import createStore from "react-persist-store/dist/persist-store";

const initialState = {
    user : {
        name : 'Code with yd'
    },
    login : {
        token : 'xyz'
    }
};

const store = createStore(initialState);

export const login = store("login");
export const user = store("user");