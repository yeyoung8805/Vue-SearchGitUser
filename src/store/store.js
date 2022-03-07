import {createStore} from 'vuex'
import searchViewModel from './modules/searchViewModel'

export default createStore({
    modules: {
        searchViewModel
    }
})