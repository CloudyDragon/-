<template>
  <div id="img-child-wrapper">
    <!---->
    <div>
      <div>
          <img src="http://www.suzumiya.club/sources/images/img/24.png" width="500px"/>
      </div>
      <div>
          <img src="http://www.suzumiya.club/sources/images/img/24.png" width="500px"/>
      </div>
      <div>
          <img src="http://www.suzumiya.club/sources/images/img/24.png" width="500px"/>
      </div>
    </div>
    <!---->
  </div>
</template>

<script>
export default {
  name: 'imgChild',
  created() {
    this.imgAjax()
  },
  methods: {
    imgAjax () {
      this.$axios.get('http://192.168.2.113:3000/picture/suzumiya').then(res => {
        console.log(res)
        console.log('111')
      })
    }
  }
}
</script>

<style scoped>
#img-child-wrapper {
  width: 1024px;
  margin: 20px auto;
  background-color: rgba(176, 129, 150, 0.1);
  border-radius: 1%;
}
#img-child-wrapper .img-child-container {
  margin: 0 auto;
  border-bottom: 1px solid rgba(18, 227, 243, 0.7);
  -moz-box-sizing:border-box; /* Firefox */
  -webkit-box-sizing:border-box; /* Safari */
  box-sizing:border-box;
  overflow: hidden;
}
#img-child-wrapper .img-child-container .left {
  float: left;
  width: 164px;
  padding: 20px;
}
#img-child-wrapper .img-child-container .right {
  float: left;
  padding: 20px;
  width: 780px;
  color: white;
}
#img-child-wrapper .img-child-container .right div {
  padding: 10px;
}
#img-child-wrapper .img-child-container .right .right-top {
  font-size: 20px;
}
#img-child-wrapper .img-child-container .right .right-bottom {
  color: #25a925;
}
#img-child-wrapper .img-child-container .left .img-child-shadow {
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
#img-child-wrapper .img-child-container .left .img-child-shadow img-child{
  border: 1px solid rgba(0, 0, 0, .2);
}
#img-child-wrapper .img-child-container .left .img-child-shadow:hover {
  padding: 5px;
  background-color: #FFF;
  border: 1px solid #0187C5;
  -webkit-box-shadow: 0 1px 5px #0187C5;
  -moz-box-shadow: 0 1px 5px #0187C5;
  box-shadow: 0 1px 5px #0187C5;
  cursor: pointer;
}
</style>
