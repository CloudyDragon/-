<template>
  <div id="photo-wrapper">
    <SearchBox/>
    <router-view/>
  </div>
</template>

<script>
import Img from '../components/photos/Img.vue'
import SearchBox from '../components/photos/SearchBox.vue'

export default {
  name: 'photo',
  components: {
    Img,
    SearchBox
  }
}
</script>
<style scoped>
#photo-wrapper {
  background-color: black;
}
</style>
