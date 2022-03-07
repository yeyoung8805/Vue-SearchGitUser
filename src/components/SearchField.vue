<template>
    <div class="inputBox shadow">
        <input type="text" v-model="searchText" @:keyup.enter="getGitUsers" @input="changeSearchText" />
        <span class="addContainer" @click="getGitUsers">
            <i class="material-icons addBtn">search</i>
            </span>
    </div>
</template>

<script>
import {computed} from 'vue'
import {useStore} from 'vuex'

function useSearchText() {
    const store = useStore()
    const searchText = computed(() => store.getters['getSearchText'])
    const changeSearchText = (e) => store.dispatch('changeSearchText', e.target.value)
    const getGitUsers = (e) => store.dispatch('getGitUsersAction') //eslint-disable-line no-unused-vars

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
input:focus {
    outline: none;
}
.inputBox {
    background: yellowgreen;
    height: 80px;
    line-height: 80px;
    border-radius: 5px;
}
.inputBox input {
    background: yellowgreen;
    border-style: none;
    font-size: 60px;
    vertical-align: middle;
}
.addContainer {
    float: right;
    background: linear-gradient(to right, #62EAC6, #32CEE6);
    width: 7rem;
    border-radius: 0 5px 5px 0;
}
.addBtn {
    color: white;
    vertical-align: middle;
    font-size: 2rem;
}
</style>