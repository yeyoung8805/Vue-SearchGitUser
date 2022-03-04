import {getGitUsersApi} from '@/api/GitUserApi'

const state = {
    gitUsers: [],
    headerText: 'Search Git User',
    searchText: '',
}

const getters = {
    getSearchText: (state) => {
        return state.searchText
    },
    getGitUsers: (state) => {
        return state.gitUsers
    },
}

const actions = {
    async getGitUsersAction ({commit}) {
        const response = await getGitUsersApi(state.searchText)
        commit('setGitUsers', response.data.items)
        comsole.log("get git users : ", state.gitUsers)
    },
}

export default {
    state,
    getters,
    actions,
}