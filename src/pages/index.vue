<template>
  <div>
      <Menu/>
      <transition enter-active-class="animated slideInLeft"
   leave-active-class="animated bounceOutUp"
>
       <router-view/>
      </transition>
      <Segmenting/>
      <div style="background-color: white">
        <div style="width:300px;margin:0 auto; padding:20px 0;text-align: center;">
          &nbsp;&nbsp;
          <img src="../assets/beian.png">
          <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=53011202000456" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">
            <img src="" style="float:left;">
            <p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">滇公网安备 53011202000456号</p>
          </a>
        </div>
      </div>
  </div>
</template>

<script>
import animate from 'animate.css'
import Menu from '../components/Menu.vue'
import Segmenting from '../components/Segmenting.vue'

export default {
  name: 'photo',
  components: {
    Menu,
    Segmenting
  }
}
</script>
