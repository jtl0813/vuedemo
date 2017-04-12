<template>
  <div class="logmanager">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'logmanager',
  data () {
    return {
      msg: 'LogManager'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
