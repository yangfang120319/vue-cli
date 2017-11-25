<template>
  <div>
	<mycomponent width="550" vediosrc="/static/media/mov_bbb.198918f.mp4"></mycomponent>
  </div>
</template>

<script>
import mycomponent from './mycomponent'


export default {
  name: 'Canvas',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    mycomponent
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
