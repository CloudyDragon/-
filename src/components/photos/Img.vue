<template>
  <div id="img-wrapper">
    <div class="img-container">
      <div class="left">
        <a class="img-shadow">
          <img src="http://www.suzumiya.club/sources/images/img/1.png" width="150px" height=""/>
        </a>
      </div>
      <div class="right">
        <div class="right-top">优酷里伍德&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ff6699">♥&nbsp;</span>131</div>
        <div class="right-bottom">
        动漫作品《这样算是僵尸吗？》中的女主角之一，银色长发闪烁动人，身穿防护手套和板甲，有着蓝色瞳孔，仿佛像是人偶般的少女。于5月26日在便利商店的停车场里认识了相川步，并觉得步是一个特殊的存在。在步被杀后，把步变成了僵尸，同时也最喜欢步。
        </div>
      </div>
    </div>
    <!---->
    <div class="img-container">
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
    </div>
    <!---->
    <div class="img-container">
      <div class="left">
        <a class="img-shadow">
          <img src="https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=c8214965044f78f0940692a118586130/29381f30e924b8999acdae0969061d950a7bf60a.jpg" width="150px" height=""/>
        </a>
      </div>
      <div class="right">
        <div class="right-top">雪之下雪乃&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ff6699">♥&nbsp;</span>131</div>
        <div class="right-bottom">
        雪之下雪乃，轻小说作品《我的青春恋爱物语果然有问题。》及其衍生作品中女主角之一。雪之下阳乃的妹妹，侍奉部部长，完美主义者，偏差值排名第一，是一个十全十美的美少女，在学习及其他方面都有优秀的成绩，因此被同级生嫉妒，也因自己的性格导致没什么朋友。个性毒舌但不擅人际交流，外表虽冰冷严厉，实际也有温柔的一面。在遇到比企谷八幡、由比滨结衣二人后，与二人的相处中，其人物的内心也在慢慢开始发生变化。
        </div>
      </div>
    </div>
    <!---->
    <div class="img-container">
      <div class="left">
        <a class="img-shadow">
          <img src="../../assets/logo.png" width="150px" height=""/>
        </a>
      </div>
      <div class="right">
        <div class="right-top">时空之轮研究所&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ff6699">♥&nbsp;</span>131</div>
        <div class="right-bottom">
        完全不知道要写些什么在这里才好
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'img'
}
</script>

<style scoped>
#img-wrapper {
  width: 1024px;
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
