<template>
    <div>
        <ul>
            <li v-for="(gitUser) in gitUsers" v-bind:key="gitUser">
                <span>{{item.login}}</span>
                <span>{{item.avatar_url}}</span>
                <span>{{item.html_url}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
// import {computed} from 'vue'
import {useStore} from 'vuex'

function useValue() {
    const store = useStore()
    // const gitUsers = computed(() => store.getters['getGitUsers'])
    const gitUsers = () => store.getters['getGitUsers'];
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
    methods: {

    },
    
}
</script>

<style scoped>

</style>