<template>
  <div id="bg">
      <canvas class="canvas canvas-pattern js-canvas" max-width="500px" max-height="500px"></canvas>
      <canvas class="canvas js-duplicate" max-width="500px" max-height="500px"></canvas>
      <div class="describe">
         <canvas id="colour-font" max-width="500px" max-height="50px"></canvas>
      </div>
  </div>
</template>

<script>
import mybg from '@/plugins/bgCanvas.js'
export default {
  name: 'bg',
  mounted: function() {
    this.$nextTick(function() {
      mybg.bg()
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
#bg
  min-height: 700px;
  background-color: black;
  .canvas
    display: block;
    margin: 0 auto;
    border-radius: 50%;
  .canvas-pattern
    display: none;
  .describe
    text-align: center;

</style>
