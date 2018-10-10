<template>
  <div>
    <div class="nav-name" @click="test('Video')">视频</div>
    <div class="nav-name">音乐</div>
    <router-link class="nav-name" :to="{path:'/photo'}">图片</router-link>
    <router-link class="nav-name" :to="{path:'/'}">主页</router-link>
  </div>
</template>

<script>
export default {
  name: 'MenuChild',
  data () {
    return {
      msg: 'home'
    }
  },
  methods: {
    test (a) {
      alert(a)
    }
  }
}
</script>

<style scoped>
a {
  text-decoration:none;
  outline: none;
  color: #fff;
}
.nav-name {
  float: right;
  width: 150px;
  height: 50px;
  color: white;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
  text-shadow: rgb(255, 255, 255) 0px 0px 10px, rgb(255, 255, 255) 0px 0px 20px, rgb(255, 0, 222) 0px 0px 30px, rgb(255, 0, 222) 0px 0px 40px, rgb(255, 0, 222) 0px 0px 70px, rgb(255, 0, 222) 0px 0px 80px, rgb(255, 0, 222) 0px 0px 100px;
}
.nav-name:hover {
  text-shadow: white 0px 0px 10px, white 0px 0px 20px, rgb(0, 255, 255) 0px 0px 30px, rgb(0, 255, 255) 0px 0px 40px, rgb(0, 255, 255) 0px 0px 70px, rgb(0, 255, 255) 0px 0px 80px, rgb(0, 255, 255) 0px 0px 100px;
}
.nav-name:first-child {
  margin-right: 100px;
}
.select {
  color: #14c7f6;
}
</style>
