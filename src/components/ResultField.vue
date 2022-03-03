<template>
    <div>
        <ul>
            <li v-for="(item) in items" v-bind:key="item">
                <span>{{item.login}}</span>
                <span>{{item.avatar_url}}</span>
                <span>{{item.html_url}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    components: {},
    data() {
        return {
            items: [],
            total_count : 0,
        }
    },
    methods: {
        read() {
            let params = {
                'q' : items.item,
            }
            axios
                .get("https://api.github.com/search/users", {
                    headers : {"accept" : "application/vnd.github.v3+json"},
                    params: {params}
                })
                .then(response => {
                    const{data} = response
                    console.log(data)
                    this.items = data.items
                    this.total_count = data.total_count
                })
                .catch(error => {
                    alert(error)
                })
        }
    },
    created() {
        console.log(axios)
        this.read()
    },
}
</script>

<style scoped>

</style>