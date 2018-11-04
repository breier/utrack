<template>
  <div class="list-group container">
    <a @click="clearAllDB">Clear DataBase & Restart (ß)</a>
    <div class="list-group">
      <a class="list-group-item list-group-item-action flex-column align-items-start" v-for="activity in activities" v-bind:key="activity.id">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{{ activity.starttime.toLocaleDateString() }} - {{ activity.starttime.toLocaleTimeString() }}</h5>
        </div>
        <p class="mb-1">{{ activity.type }} -> {{ activity.uses }} -> {{ activity.action }}</p>
      </a>
    </div>
    <a v-if="lastActivityIsFinished" class="btn btn-primary action" href="#/add">Add Activity</a>
    <a v-else class="btn btn-warning action" @click="endActivity">Stop Activity</a>
  </div>
</template>

<script>
import Dexie from 'dexie'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'ActivitiesList',
  data () {
    return {
      maxActivitiesList: 5,
      lastActivityIsFinished: true,
      activities: [
        {type: 'Waiting for', uses: 'New', action: 'Activity', starttime: new Date(new Date().valueOf() - 600000), finishtime: new Date()}
      ]
    }
  },
  methods: {
    clearAllDB () {
      Dexie.delete('utrack')
        .then(function (result) {
          window.location.reload()
        })
    },
    endActivity (event) {
      let that = this

      this.$db.activities
        .update(that.activities[that.activities.length - 1].id, {finishtime: new Date()})
        .then(function (result) {
          if (result) {
            that.activities[that.activities.length - 1].finishtime = new Date()
            that.lastActivityIsFinished = true
          } else {
            // eslint-disable-next-line
            console.warn("Couldn't Update Finish Time of Activity!")
          }
        })
    }
  },
  mounted () {
    let that = this

    this.$db.activities.toArray().then(function (result) {
      if (result.length) {
        that.activities = result

        if (result.length > that.maxActivitiesList) {
          result.splice(0, result.length - that.maxActivitiesList)
        }

        that.lastActivityIsFinished = !!that.activities[that.activities.length - 1].finishtime
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
