<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
// eslint-disable-next-line
//console.log('example')
</script>

<style>
@font-face {
  font-family: webCantarell;
  src: url("./assets/Cantarell-Regular.woff");
}
html, body, #app {
  height: 100%;
}
body {
  color: #3A6B5C;
  background: #EAEAEA;
  font-family: Cantarell, webCantarell, Roboto, "Droid Sans", Arial, sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.471;
  overflow-x: hidden;
  letter-spacing: 0.04em;
  font-smoothing: antialiased;
}
.btn {
  line-height: 3em;
}
.btn + .btn {
  margin-top: 2px;
}
</style>
