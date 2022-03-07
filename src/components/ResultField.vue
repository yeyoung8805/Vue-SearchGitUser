<template>
    <div>
        <ul>
            <li v-for="(gitUser, index) in gitUsers" :key="gitUser" class="shadow">
                <img :src="gitUser.avatar_url" />&nbsp;&nbsp;
                <span>{{gitUser.login}}</span> &nbsp; | &nbsp;
                <span>{{gitUser.html_url}}</span>
                <span class="removeBtn" @click="removeUser(gitUser, index)"><i class="material-icons">remove</i></span>
            </li>
        </ul>
    </div>
</template>

<script>
import {computed} from 'vue'
import {useStore} from 'vuex'

function useValue() {
    const store = useStore()
    const gitUsers = computed(() => store.getters['getGitUsers'])
    // const gitUsers = () => store.getters['getGitUsers'];
    return {
        gitUsers,
    }
}

export default {
    setup() {
        return {
            ...useValue(),
        }
    },
    computed: {
        
    },
    mounted() {

    },
    methods: {
        // removeUser(userItem, index) {
        //     this.$store.commit('removeItem', {userItem, index})
        // },
        removeUser: function(gitUser, index) {
            console.log(gitUser, index);
            localStorage.removeItem(gitUser);
            this.gitUsers.splice(index, 1); // 특정 인덱스를 지운다.
        },
    },
    
}
</script>

<style scoped>
ul {
    list-style-type: none;
    padding-left: 0;
    margin-top: 0;
    text-align: left;
}
li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
}

.removeBtn {
    margin-left: auto;
    color: #de4343;
}
</style>