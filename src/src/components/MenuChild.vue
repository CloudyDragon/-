<template>
  <div id="nav-left">
    <router-link class="nav-name"
                :class="{ active: count == 1 }"
                :to="{ path:'/' }"
                @click.native="select(1)">主页</router-link>
    <router-link class="nav-name"
                :class="{ active: count == 2 }"
                :to="{ path:'/photo' }"
                @click.native="select(2)">图片</router-link>

    <router-link class="nav-name"
                :class="{ active: count == 3 }"
                :to="{ path:'/' }"
                @click.native="select(3)">音乐</router-link>

    <router-link class="nav-name"
                :class="{ active: count == 4 }"
                :to="{ path:'/' }"
                @click.native="select(4)">视频</router-link>
  </div>
</template>

<script>
export default {
  name: 'MenuChild',
  props: ['num'],
  data () {
    return {
      count: 1
    }
  },
  watch: {
    num: function () {
      this.count = this.num
    }
  },
  methods: {
    select (num) {
      this.count = num
    }
  }
}
</script>

<style lang="stylus" scoped>
a
  text-decoration:none;
  outline: none;
  color: #fff;
#nav-left
  max-width: 616px;
  width: 100%
  display: flex;
  justify-content: space-around;
  .nav-name
    height: 50px;
    color: white;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
    text-shadow: rgb(255, 255, 255) 0px 0px 10px, rgb(255, 255, 255) 0px 0px 20px, rgb(255, 0, 222) 0px 0px 30px, rgb(255, 0, 222) 0px 0px 40px, rgb(255, 0, 222) 0px 0px 70px, rgb(255, 0, 222) 0px 0px 80px, rgb(255, 0, 222) 0px 0px 100px;
  .nav-name:hover
    text-shadow: white 0px 0px 10px, white 0px 0px 20px, rgb(0, 255, 255) 0px 0px 30px, rgb(0, 255, 255) 0px 0px 40px, rgb(0, 255, 255) 0px 0px 70px, rgb(0, 255, 255) 0px 0px 80px, rgb(0, 255, 255) 0px 0px 100px;
  .nav-name:first-child
    margin-right: 0px;
  .active
    color: #14c7f6;

</style>
