<template>
  <div id="img-wrapper">
    <!---->
    <!--<div class="img-container">
      <div class="left">
        <a class="img-shadow">
          <img src="http://www.suzumiya.club/sources/images/img/24.png" width="150px" height=""/>
        </a>
      </div>
      <div class="right">
        <div class="right-top"><router-link :to="{path:'/imgchild'}">凉宫春日</router-link>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ff6699">♥&nbsp;</span>131</div>
        <div class="right-bottom">
        《凉宫春日系列》轻小说的女主角。好胜心极强，有着唯我独尊、旁若无人的性格。上了高中也不满足于任何社团，在接受阿虚的建议后闪电成立了SOS团（让世界变得更热闹的凉宫春日的团）。不知为何拥有能够改变世界、使“愿望成真”的神力，引来外星人、未来人和超能力者的关切，但本人毫不知情，让事情变得相当复杂。
        </div>
      </div>
    </div>-->
    <!---->
    <SearchBox @search="initAjax"/>
    <div class="img-container" v-for="(item, index) in imgListData.data" :key="index">
      <div class="left">
        <a class="img-shadow">
          <img :src="'http://www.suzumiya.club:6363/' + item.img_src" width="150px" height=""/>
        </a>
      </div>
      <div class="right">
        <div class="right-top">
          <router-link :to="{ path: '/imgchild', query: {name: item.role_name}}">
          {{item.role_name}}
          </router-link>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ff6699">♥&nbsp;</span>131</div>
        <div class="right-bottom" style="text-indent:2em">
        {{item.role_introduction}}
        </div>
      </div>
    </div>
    <Warn v-if="ctrl"/>
  </div>
</template>

<script>
import {
  mapState,
  mapActions
} from 'vuex'
import SearchBox from './SearchBox.vue'
import Warn from '../parts/Warn.vue'

export default {
  name: 'myImg',
  created () {
    this.initAjax()
  },
  data () {
    return {
      pageHeight: -1,
      viewHeight: -1,
      scrollTop: 23333,
      index: 1,
      ctrl: false,
      counter: 0
    }
  },
  mounted () {
    window.onscroll = () => {
      this.pageHeight = document.documentElement.offsetHeight || document.body.offsetHeight
      this.viewHeight = document.documentElement.clientHeight || document.body.clientHeight
      this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      //console.log(this.scrollTop + this.viewHeight, this.pageHeight)
      if (this.scrollTop + this.viewHeight >= this.pageHeight - 10) {
        this.index++
        console.log('scroll')
      }
    }
    this.counter = this.$store.state.picture.imgListData.data.length
    console.log(this.counter)
  },
  watch: {
    index () {
      this.scrollClick()
    },
    counter () {
      console.log()
    }
  },
  computed: {
    ...mapState({
      imgListData: state => state.picture.imgListData
    })
  },
  methods: {
    ...mapActions(['GETIMGLIST']),
    initAjax (val) {
      this.GETIMGLIST({
        page_size: 6 * this.index,
        page_index: 1,
        parameter: val
      })
    },
    scrollClick () {
      if (this.ctrl === false) {
        console.log('MyImg.vue')
        this.initAjax()
        if (this.imgListData.data.length === this.imgListData.page.total) {
          this.ctrl = true
        }
      }
    }
  },
  components: {
    SearchBox,
    Warn
  }
}
</script>

<style lang="stylus" scoped>
#img-wrapper
  background-color: rgba(176, 129, 150, 0.1);
  border-radius: 1%;
  .img-container
    margin: 0 auto;
    border-bottom: 1px solid rgba(18, 227, 243, 0.7);
    box-sizing:border-box;
    overflow: hidden;
    .left
      float: left;
      width: 164px;
      padding: 20px;
      .img-shadow
        display: block;
        padding: 5px;
        background-color: #fff;
        border-top: 1px solid #C7C7C9;
        border-left: 1px solid #A9A9AB;
        border-right: 1px solid #A9A9AB;
        border-bottom: 1px solid #858486;
        -webkit-box-shadow: 0 1px 5px #AAA;
        -moz-box-shadow: 0 1px 5px #AAA;
        box-shadow: 0 1px 5px #AAA;
      .img-shadow:hover
          padding: 5px;
          background-color: #FFF;
          border: 1px solid #0187C5;
          -webkit-box-shadow: 0 1px 5px #0187C5;
          -moz-box-shadow: 0 1px 5px #0187C5;
          box-shadow: 0 1px 5px #0187C5;
          cursor: pointer;
        img
          border: 1px solid rgba(0, 0, 0, .2);
    .right
      margin-top: 7px;
      color: white;
      a
        text-decoration:none;
        outline: none;
        color: #fff;
        text-shadow: #0c0a0a 0px 0px 10px, #fff 0px 0px 20px, #ff00de 0px 0px 30px, #170f16 0px 0px 40px, #591650 0px 0px 70px, #3c1437 0px 0px 80px, #ff00de 0px 0px 100px;
      a:hover
        color: red;
      div
        padding: 10px;
      .right-top
        font-size: 20px;
      .right-bottom
        color: #a94125;
        font-family: 'KaiTi_GB2312';

</style>
