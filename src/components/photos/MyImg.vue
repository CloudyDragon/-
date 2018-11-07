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
    <SearchBox/>
    <div class="img-container" v-for="(item, index) in imgListData.data" :key="index">
      <div class="left">
        <a class="img-shadow">
          <img :src="'http://www.suzumiya.club:6363/' + item.img_src" width="150px" height=""/>
        </a>
      </div>
      <div class="right">
        <div class="right-top">
          <router-link :to="'/imgchild/' + item.role_name">
          {{item.role_name}}
          </router-link>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ff6699">♥&nbsp;</span>131</div>
        <div class="right-bottom" style="text-indent:2em">
        {{item.role_introduction}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  mapState,
  mapActions
} from 'vuex'
import SearchBox from './SearchBox.vue'

export default {
  name: 'myImg',
  created() {
    this.initAjax()
  },
  data() {
    return {
      list: [1, 2, 3]
    }
  },
  computed: {
    ...mapState(['imgListData'])
  },
  methods: {
    ...mapActions(['GETIMGLIST']),
    initAjax() {
      this.GETIMGLIST({
        page_size: 6,
        page_index: 1,
        parameter: ''
      })
    }
  },
  components: {
    SearchBox
  }
}
</script>

<style scoped>
#img-wrapper {
  width: 1024px;
  min-height: 600px;
  margin: 20px auto;
  background-color: rgba(176, 129, 150, 0.1);
  border-radius: 1%;
}
#img-wrapper .img-container {
  margin: 0 auto;
  border-bottom: 1px solid rgba(18, 227, 243, 0.7);
  -moz-box-sizing:border-box; /* Firefox */
  -webkit-box-sizing:border-box; /* Safari */
  box-sizing:border-box;
  overflow: hidden;
}
#img-wrapper .img-container .left {
  float: left;
  width: 164px;
  padding: 20px;
}
#img-wrapper .img-container .right {
  float: left;
  padding: 20px;
  width: 780px;
  color: white;
}
#img-wrapper .img-container .right div {
  padding: 10px;
}
#img-wrapper .img-container .right .right-top {
  font-size: 20px;
}
#img-wrapper .img-container .right .right-bottom {
  color: #25a925;
}
#img-wrapper .img-container .left .img-shadow {
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
}
#img-wrapper .img-container .left .img-shadow img{
  border: 1px solid rgba(0, 0, 0, .2);
}
#img-wrapper .img-container .left .img-shadow:hover {
  padding: 5px;
  background-color: #FFF;
  border: 1px solid #0187C5;
  -webkit-box-shadow: 0 1px 5px #0187C5;
  -moz-box-shadow: 0 1px 5px #0187C5;
  box-shadow: 0 1px 5px #0187C5;
  cursor: pointer;
}
</style>
