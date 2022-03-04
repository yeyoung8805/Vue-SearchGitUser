import axios from './axios'

function getGitUsersApi(id) {
    return axios.get('/search/users', {
        params: {
            q : id,

        }
    })
}
export {getGitUsersApi}