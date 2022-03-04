<template>
    <div>
        <input type="text" v-model="searchText" v-on:keyup.enter="getGitUsers">
        <span v-on:click="getGitUsers">search</span>
    </div>
</template>

<script>
// import {computed} from 'vue'
import {useStore} from 'vuex'

function useSearchText() {
    const store = useStore()
    // const searchText = computed(() => store.getters['getSearchText'])
    const searchText = () => this.store.getters['getSearchText'];
    const changeSearchText = (e) => store.dispatch('changeSearchText', e.target.value)
    // const getGitUsers = (e) => store.dispatch('getGitUsersAction')
    // const getGitUsers = computed(() => store.dispatch['getGitUsersAction'])
    const getGitUsers = () => store.dispatch('getGitUsersAction')

    return  {
        searchText,
        changeSearchText,
        getGitUsers
    }
}

export default {
    setup() {
        return {
            ...useSearchText()
        }
    },
    
    methods: {
        // searchItem: function() {
        //     if(this.newSearchItem!= '') {
        //         var obj = {completed: false, item: this.newSearchItem};
        //         console.log(this.newSearchItem);
        //         //저장하는 로직
        //         localStorage.setItem(this.newSearchItem, JSON.stringify(obj)); //스트링으로 변경되도록 함
        //         this.clearInput();
        //     }
        // },
        clearInput: function() {
            this.searchText = '';
        },
        // getGitUsers: function(){
        //     axios.get("/search/users", {
        //             // headers : {"accept" : "application/vnd.github.v3+json"},
        //             params: {
        //                 q:"kim",
        //             }
        //         })
        //         .then(response => {
        //             const{data} = response
        //             console.log(data)
        //             this.items = data.items
        //             this.total_count = data.total_count
        //         })
        //         .catch(error => {
        //             alert(error)
        //         })
        // }
    },
}
</script>

<style scoped>

</style>