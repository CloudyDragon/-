<template>
  <div id="photo-wrapper">
    <router-view/>
  </div>
</template>

<script>
import MyImg from '../components/photos/MyImg.vue'

export default {
  name: 'photo',
  components: {
    MyImg
  }
}
</script>
<style scoped>
#photo-wrapper {
  background-color: black;
}
</style>
