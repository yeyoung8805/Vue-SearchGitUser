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
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>