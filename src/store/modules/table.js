import axios from "axios"

export default {
    state: {
        users: []
    },
    mutations: {
        SET_USERS(state, users) {
            state.users = users
        },
        createUsers(state, newUser){
            state.users.push(newUser.data)
        }
    },
    actions: {
        async getUsers({ commit }) {
            const response = await axios.get('./users.json');
            commit('SET_USERS', response.data.users);
        }
    },
    getters: {
        allUsers(state) {
            return state.users
        }
    }
}
