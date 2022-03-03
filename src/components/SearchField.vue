<template>
    <div>
        <input type="text" v-model="newSearchItem" v-on:keyup.enter="searchItem">
        <span v-on:click="searchItem">add
        </span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newSearchItem: ""
        }
    },
    methods: {
        searchItem: function() {
            if(this.newSearchItem!= '') {
                var obj = {completed: false, item: this.newSearchItem};
                console.log(this.newSearchItem);
                //저장하는 로직
                localStorage.setItem(this.newSearchItem, JSON.stringify(obj)); //스트링으로 변경되도록 함
                this.clearInput();
            }
        },
        clearInput: function() {
            this.newSearchItem = '';
        }
    },
}
</script>

<style scoped>

</style>