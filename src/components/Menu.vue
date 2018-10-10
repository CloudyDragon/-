<template>
  <div id="nav">
    <transition enter-active-class="animated fadeIn"
   leave-active-class="animated fadeOut"
>
      <MenuChild v-show="menuShow"/>
    </transition>
    <div class="menu-button" @click="test">
      <canvas id="mycanvas" width="50px" height="49px" style="background-color:white;"></canvas>
    </div>
  </div>
</template>

<script>
import animate from 'animate.css'
import MenuChild from './MenuChild.vue'

export default {
  name: 'Menu',
  data () {
    return {
      menuShow: true
    }
  },
  methods: {
    test () {
      this.menuShow = !this.menuShow
      var c = document.getElementById('mycanvas')
      var ctx = c.getContext('2d')
      ctx.fillStyle = 'black'
      ctx.fillRect(0, 0, 50, 50)
      ctx.fillStyle = '#fff'
      ctx.fillRect(10, 7, 30, 6)
      ctx.fillRect(10, 20, 30, 6)
      ctx.fillRect(10, 35, 30, 6)
    }
  },
  mounted: function() {
    //用于绘制菜单button的Canvas
    this.$nextTick(function() {
      var c = document.getElementById('mycanvas')
      var ctx = c.getContext('2d')
      ctx.fillStyle = '#000'
      ctx.fillRect(0, 0, 50, 50)
      ctx.fillStyle = '#fff'
      ctx.fillRect(10, 7, 30, 6)
      ctx.fillRect(10, 20, 30, 6)
      ctx.fillRect(10, 35, 30, 6)
    })
  },
  components: {
    MenuChild
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#nav {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid rgba(255, 0, 0, .3);
}
.menu-button {
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 1000;
  height: 50px;
  width: 50px;
  -moz-box-sizing:border-box; /* Firefox */
  -webkit-box-sizing:border-box; /* Safari */
  box-sizing:border-box;
  cursor: pointer;
}
.menu-button span {
  display: inline-block;
  height: 50px;
  line-height: 50px;
}
.menu-button #mycanvas {
  display: block;
  border-radius: 0%;
}
</style>
