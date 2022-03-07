<template>
    <div>
        <ul>
            <li v-for="(gitUser, index) in gitUsers" :key="gitUser">
                <span>{{gitUser.login}}</span>
                <span>{{gitUser.avatar_url}}</span>
                <span>{{gitUser.html_url}}</span>
                <span @click="removeUser(userItem, index)">remove</span>
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
        removeUser(userItem, index) {
            this.$store.commit('removeItem', {userItem, index})
        },
    },
    
}
</script>

<style scoped>

</style>