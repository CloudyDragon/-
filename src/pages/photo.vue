<template>
  <div id="photo-wrapper">
    <router-view/>
  </div>
</template>

<script>
import MyImg from '@/components/photos/MyImg.vue'

export default {
  name: 'photo',
  components: {
    MyImg
  }
}
</script>
<style lang="stylus" scoped>
#photo-wrapper
  max-width: 1024px;
  margin: 20px auto;
  background-color: black;
</style>
