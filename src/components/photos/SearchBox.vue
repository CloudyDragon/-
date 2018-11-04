<template>
  <div>
    <div id="search">
      <input placeholder="你想找谁呢?" type="search" v-model="inp"/>
      <button @click="initAjax">查询</button>
    </div>
  </div>
</template>

<script>
import {
  mapActions
} from 'vuex'

export default {
  name: 'searchBox',
  data() {
    return {
      inp: ''
    }
  },
  methods: {
    ...mapActions(['GETIMGLIST']),
    initAjax() {
      this.GETIMGLIST({
        page_size: 6,
        page_index: 1,
        parameter: this.inp
      })
    }
  }
}
</script>

<style scoped>
#search {
  width: 346px;
  height: 40px;
  margin: 20px auto;
}
#search input {
  float: left;
  display: block;
  width: 266px;
  height: 40px;
  margin: 0;
  padding: 0 10px;
  color: #888;
  font-family: 'Cabin', helvetica, arial, sans-serif;
  font-size: 13px;
  font-weight: 400;
  text-shadow: 0 -1px 0 #000;
  background: #222;
  background: -webkit-linear-gradient(#333, #222);
  background: -moz-linear-gradient(#333, #222);
  background: -o-linear-gradient(#333, #222);
  background: -ms-linear-gradient(#333, #222);
  background: linear-gradient(#333, #222);
  border: 1px solid #444;
  border-radius: 5px 0 0 5px;
  box-shadow: 0 2px 0 #000;
}
#search input:focus {
  -webkit-animation: glow 800ms ease-out infinite alternate;
  -moz-animation: glow 800ms ease-out infinite alternate;
  -o-animation: glow 800ms ease-out infinite alternate;
  -ms-animation: glow 800ms ease-out infinite alternate;
  animation: glow 800ms ease-out infinite alternate;
  background: #222922;
  background: -webkit-linear-gradient(#333933, #222922);
  background: -moz-linear-gradient(#333933, #222922);
  background: -o-linear-gradient(#333933, #222922);
  background: -ms-linear-gradient(#333933, #222922);
  background: linear-gradient(#333933, #222922);
  border-color: #393;
  box-shadow: 0 0 5px rgba(0,255,0,.2), inset 0 0 5px rgba(0,255,0,.1), 0 2px 0 #000;
  color: #efe;
}
#search button {
  float: left;
  display: block;
  width: 80px;
  height: 40px;
  margin: 0;
  padding: 0;
  color: #fff;
  font-family: 'Cabin', helvetica, arial, sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 40px;
  text-shadow: 0 -1px 0 #000;
  background: #222;
  background: -webkit-linear-gradient(#333, #222);
  background: -moz-linear-gradient(#333, #222);
  background: -o-linear-gradient(#333, #222);
  background: -ms-linear-gradient(#333, #222);
  background: linear-gradient(#333, #222);
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -o-box-sizing: border-box;
  box-sizing: border-box;
  border: 1px solid #444;
  border-left-color: rgb(68, 68, 68);
  border-left-color: #000;
  border-radius: 0 5px 5px 0;
  box-shadow: 0 2px 0 #000;
}
#search button:hover {
  color: #5f5;
  background: #292929;
  background: -webkit-linear-gradient(#393939, #292929);
  background: -moz-linear-gradient(#393939, #292929);
  background: -o-linear-gradient(#393939, #292929);
  background: -ms-linear-gradient(#393939, #292929);
  background: linear-gradient(#393939, #292929);
  cursor: pointer;
}
@-webkit-keyframes glow {
  0% {
  border-color: #393;
  box-shadow: 0 0 5px rgba(0,255,0,.2), inset 0 0 5px rgba(0,255,0,.1), 0 2px 0 #000;
  }
  100% {
  border-color: #6f6;
  box-shadow: 0 0 20px rgba(0,255,0,.6), inset 0 0 10px rgba(0,255,0,.4), 0 2px 0 #000;
  }
}
@-moz-keyframes glow {
  0% {
  border-color: #393;
  box-shadow: 0 0 5px rgba(0,255,0,.2), inset 0 0 5px rgba(0,255,0,.1), 0 2px 0 #000;
  }
  100% {
  border-color: #6f6;
  box-shadow: 0 0 20px rgba(0,255,0,.6), inset 0 0 10px rgba(0,255,0,.4), 0 2px 0 #000;
  }
}
@-o-keyframes glow {
  0% {
  border-color: #393;
  box-shadow: 0 0 5px rgba(0,255,0,.2), inset 0 0 5px rgba(0,255,0,.1), 0 2px 0 #000;
  }
  100% {
  border-color: #6f6;
  box-shadow: 0 0 20px rgba(0,255,0,.6), inset 0 0 10px rgba(0,255,0,.4), 0 2px 0 #000;
  }
}
@-ms-keyframes glow {
  0% {
  border-color: #393;
  box-shadow: 0 0 5px rgba(0,255,0,.2), inset 0 0 5px rgba(0,255,0,.1), 0 2px 0 #000;
  }
  100% {
  border-color: #6f6;
  box-shadow: 0 0 20px rgba(0,255,0,.6), inset 0 0 10px rgba(0,255,0,.4), 0 2px 0 #000;
  }
}
@keyframes glow {
  0% {
  border-color: #393;
  box-shadow: 0 0 5px rgba(0,255,0,.2), inset 0 0 5px rgba(0,255,0,.1), 0 2px 0 #000;
  }
  100% {
  border-color: #6f6;
  box-shadow: 0 0 20px rgba(0,255,0,.6), inset 0 0 10px rgba(0,255,0,.4), 0 2px 0 #000;
  }
}
</style>
