<template>
  <div class="list-group container">
    <div class="list-group">
      <a
        class="list-group-item list-group-item-action flex-column align-items-start"
        v-for="item in activities"
        v-bind:key="item.datetime.toISOString()"
      >
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{{ item.datetime.toLocaleDateString() }} - {{ item.datetime.toLocaleTimeString() }}</h5>
        </div>
        <p class="mb-1">{{ item.type }} -> {{ item.uses }} -> {{ item.action }}</p>
      </a>
    </div>
    <a class="btn btn-primary action" href="#/add">Add Activity</a>
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
        {type: 'Waiting for', uses: 'New', action: 'Activity', comment: null, datetime: new Date(), location: null}
      ]
    }
  },
  mounted () {
    this.$db.activities.toArray().then(function (result) {
      if (result.length) {
        this.activities = result
      }
    })
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
