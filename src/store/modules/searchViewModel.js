import {getGitUsersApi} from '@/api/GitUserApi'

const state = {
    gitUsers: [],
    headerText: 'Search Git User',
    searchText: '',
}

const mutations = {
    updateSearchText(state, text) {
        state.searchText = text
    },
    setGitUsers(state, data) {
        state.gitUsers = data
    }
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
    changeSearchText({commit}, value) {
        commit('updateSearchText', value)
    },

    async getGitUsersAction ({commit}) {
        const response = await getGitUsersApi(state.searchText)
        commit('setGitUsers', response.data.items)
        console.log('get git users : ', state.gitUsers)
    },
}

export default {
    state,
    mutations,
    getters,
    actions,
}