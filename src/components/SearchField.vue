<template>
    <div>
        <input type="text" v-model="searchText" @:keyup.enter="getGitUsers" @input="changeSearchText" />
        <span @click="getGitUsers">search</span>
    </div>
</template>

<script>
import {computed} from 'vue'
import {useStore} from 'vuex'

function useSearchText() {
    const store = useStore()
    const searchText = computed(() => store.getters['getSearchText']) //eslint-disable-line no-unused-vars
    // const searchText = () => this.store.getters['getSearchText'];
    const changeSearchText = (e) => store.dispatch('changeSearchText', e.target.value)
    
    const getGitUsers = (e) => store.dispatch('getGitUsersAction') //eslint-disable-line no-unused-vars
    // const getGitUsers = computed(() => store.dispatch['getGitUsersAction'])
    // const getGitUsers = (e) => store.dispatch('getGitUsersAction', e.target.value)

    return  {
        searchText,
        changeSearchText,
        getGitUsers,
    }
}

export default {
    emits : ['addUserItemEvent'],
    setup() {
        return {
            ...useSearchText()
        }
    },
    
    methods: {
        
    },
}
</script>

<style scoped>

</style>