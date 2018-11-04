<template>
  <div class="list-group container">
    <div class="list-group" v-if="wizard == 1">
        <button class="btn btn-info" v-for="type in types" v-bind:key="type.id" @click="setType">
            {{ type.text }}
        </button>
        <input class="btn text-left" type="text" placeholder="New Type" v-model="newType">
        <input class="btn btn-secondary inline" type="button" value="Add" @click="addType">
    </div>
    <div class="list-group" v-if="wizard == 2">
        <button class="btn btn-warning" v-for="use in uses" v-bind:key="use.id" @click="setUse">
            {{ use.text }}
        </button>
        <input class="btn text-left" type="text" placeholder="New Use" v-model="newUse">
        <input class="btn btn-secondary inline" type="button" value="Add" @click="addUse">
    </div>
    <div class="list-group" v-if="wizard == 3">
        <button class="btn btn-success" v-for="action in actions" v-bind:key="action.id" @click="setActivity">
            {{ action.text }}
        </button>
        <input class="btn text-left" type="text" placeholder="New Action" v-model="newAction">
        <input class="btn btn-secondary inline" type="button" value="Add" @click="addAction">
    </div>
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
      wizard: 1,
      activity: {},
      types: null,
      newType: null,
      uses: null,
      newUse: null,
      actions: null,
      newAction: null
    }
  },
  methods: {
    initDBTypes () {
      this.$db.types.add({text: 'Waiting for'})
      this.$db.types.add({text: 'On the Move'})
      this.$db.types.add({text: 'Working on'})
      this.$db.types.add({text: 'Having a'})
      this.getTypes()
    },
    setType (event) {
      let text = event.target ? event.target.innerText : event
      this.activity['type'] = text
      this.wizard++
    },
    addType () {
      if (this.newType.length > 2) {
        let that = this

        this.$db.types
          .add({text: that.newType})
          .then(function (result) {
            if (result) {
              that.setType(that.newType)
            } else {
              // eslint-disable-next-line
              console.warn("Couldn't Add Type of Activity!")
            }
          })
      } else {
        this.newType = 'Invalid'
      }
    },
    getTypes () {
      let that = this

      this.$db.types.toArray().then(function (result) {
        if (result.length) {
          that.types = result
        } else {
          that.initDBTypes()
        }
      })
    },
    initDBUses () {
      this.$db.uses.add({text: 'New'})
      this.$db.uses.add({text: 'Car'})
      this.$db.uses.add({text: 'Code'})
      this.$db.uses.add({text: 'Coffee'})
      this.getUses()
    },
    setUse (event) {
      let text = event.target ? event.target.innerText : event
      this.activity['uses'] = text
      this.wizard++
    },
    addUse () {
      if (this.newUse.length > 2) {
        let that = this

        this.$db.uses
          .add({text: that.newUse})
          .then(function (result) {
            if (result) {
              that.setUse(that.newUse)
            } else {
              // eslint-disable-next-line
              console.warn("Couldn't Add Use of Activity!")
            }
          })
      } else {
        this.newUse = 'Invalid'
      }
    },
    getUses () {
      let that = this

      this.$db.uses.toArray().then(function (result) {
        if (result.length) {
          that.uses = result
        } else {
          that.initDBUses()
        }
      })
    },
    initDBActions () {
      this.$db.actions.add({text: 'Activity'})
      this.$db.actions.add({text: 'to Home'})
      this.$db.actions.add({text: 'BackEnd'})
      this.$db.actions.add({text: 'to Work'})
      this.getActions()
    },
    setActivity (event) {
      let text = event.target ? event.target.innerText : event
      this.activity['action'] = text
      this.activity['starttime'] = new Date()
      this.$db.activities.add(this.activity)
      this.activity = {}
      this.$router.push('/')
    },
    addAction () {
      if (this.newAction.length > 2) {
        let that = this

        this.$db.actions
          .add({text: that.newAction})
          .then(function (result) {
            if (result) {
              that.setActivity(that.newAction)
            } else {
              // eslint-disable-next-line
              console.warn("Couldn't Add Action of Activity!")
            }
          })
      } else {
        this.newAction = 'Invalid'
      }
    },
    getActions () {
      let that = this

      this.$db.actions.toArray().then(function (result) {
        if (result.length) {
          that.actions = result
        } else {
          that.initDBActions()
        }
      })
    }
  },
  mounted () {
    this.wizard = 1
    this.getTypes()
    this.getUses()
    this.getActions()
  }
}
</script>

<style scoped>
  .container {
    height: 100%;
    padding: 2px;
  }
  .container .list-group {
    position: relative;
  }
  input.btn.text-left {
    padding-right: 60px;
  }
  .inline {
    position: absolute;
    bottom: 0;
    right: 0;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }
  .action {
    margin: auto 0 0 0;
  }
</style>
