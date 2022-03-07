<template>
  <div id="app">
    <SearchField></SearchField>
    <ResultField></ResultField>
  </div>
</template>

<script>
import SearchField from './components/SearchField.vue'
import ResultField from './components/ResultField.vue'

export default {
  components: {
    'SearchField' : SearchField,
    'ResultField' : ResultField
  },
  data() {
    return {
      userItems: [],
    }
  },
  created() {},
  methods : {
    deleteOneItem(userItem, index) {
      console.log(userItem)
      localStorage.removeItem(userItem)
      this.userItems.splice(index, 1)
    },
  },
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  text-align: center;
  background-color: #f6f6f6;
}
input {
  border-style: groove;
  width: 400px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>