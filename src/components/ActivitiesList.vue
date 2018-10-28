<template>
  <div>
    <div class="col-12 list" v-for="item in activities" v-bind:key="item.datetime.getMilliseconds()">
      {{ item.type }} -> {{ item.uses }} -> {{ item.action }} ({{ item.datetime }})
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
  name: 'ActivitiesList',
  data () {
    return {
      activities: [
        {type: 'Moving', uses: 'Car', action: 'Rental', comment: null, datetime: new Date(), location: null}
      ]
    }
  }
}
</script>

<style scoped>
  h3 {
    color: red;
 }
</style>
