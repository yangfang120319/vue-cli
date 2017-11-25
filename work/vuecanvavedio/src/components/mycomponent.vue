<template>
  <div>
	<video loop controls autoplay  ref="mvideo" >
		<source :src="vediosrc" type="video/mp4"></source>
	</video>
	<canvas @click="playPause" :width="width" :height="height" ref="Mycanvas">
    </canvas>
  </div>
</template>

<script>

export default {
	props: {
      title: {
        type: String,
        default: '正在载入...'
      },
	  vediosrc: {
		type: String,
        default: ''
	  },
	  width: {
		type: String,
        default: '600'
	  },
	  height: {
		type: String,
        default: '400'
	  }
    },
	mounted() {
		var c = this.$refs.Mycanvas
		var myVideo = this.$refs.mvideo
		var ctx = c.getContext('2d')
		var that = this
		myVideo.addEventListener('play', function() {
			var i = window.setInterval(function() {
				ctx.drawImage(myVideo, 0, 0, that.width, that.height)
			}, 20);
		}, false);
		
	  },
	methods: {
		playPause: function () {
			if (this.$refs.mvideo.paused) 
			  this.$refs.mvideo.play(); 
			else 
			  this.$refs.mvideo.pause(); 
		},
	}
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
video{
	display:none
}
</style>
