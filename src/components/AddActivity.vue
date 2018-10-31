<template>
  <div class="list-group container">
    <p>nada</p>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
  name: 'AddActivity',
  data () {
    return {
      actions: [
        'Moving',
        'Working'
      ]
    }
  }
}
</script>

<style scoped>
  .container {
    height: 100%;
    padding-right: 0;
  }
</style>
