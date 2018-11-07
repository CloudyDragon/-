<template>
  <div id="img-child-wrapper" style="overflow:auto">
    <!---->
    <img v-for="(item, index) in searchImgURL.data"
      :key="index"
      :src="'http://www.suzumiya.club:6363/' + item.img_src"
    width="50%"/>
    <!---->
  </div>
</template>

<script>
import {
  mapState,
  mapActions
} from 'vuex'
export default {
  name: 'imgChild',
  mounted() {
    //console.log(this.$route)
    this.GETPICTURE({
      keywords: this.$route.path.slice(10)
    })
  },
  computed: {
    ...mapState(['searchImgURL'])
  },
  methods: {
    ...mapActions(['GETPICTURE'])
  }
}
</script>

<style lang="stylus" scoped>
#img-child-wrapper
  width: 1024px;
  min-height: 600px;
  margin: 20px auto;
  background-color: rgba(176, 129, 150, 0.1);
  border-radius: 1%;
</style>
