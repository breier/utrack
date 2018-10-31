<template>
  <div class="list-group container">
    <button class="btn btn-info" v-for="type in types" v-bind:key="type.id">{{ type.text }}</button>
    <a class="btn btn-danger action" href="#/">Cancel</a>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
  name: 'AddActivity',
  data () {
    return {
      types: null,
      uses: null,
      actions: null
    }
  },
  methods: {
    initDB () {
      this.$db.types.add({text: 'Waiting for'})
      this.$db.types.add({text: 'On the Move'})
      this.$db.types.add({text: 'Working on'})
      this.getTypes()
    },
    getTypes () {
      let that = this
      this.$db.types.toArray().then(function (result) {
        if (result.length) {
          that.types = result
        } else {
          that.initDB()
        }
      })
    }
  },
  mounted () {
    this.getTypes()
  }
}
</script>

<style scoped>
  .container {
    height: 100%;
    padding: 2px;
  }
  .action {
    margin: auto 0 0 0;
  }
</style>
