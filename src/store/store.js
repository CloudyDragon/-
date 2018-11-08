import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './img/mutations.js'
import actions from './img/actions.js'
import getters from './img/getters.js'

const isDev = process.env.NODE_ENV === 'development'

Vue.use(Vuex)
const store = new Vuex.Store({
  strict: isDev, //用于不能从其他地方修改数据
  modules: {
    picture: {
      state: {
        keywords: '233',
        imgListData: {},
        searchImgURL: {}
      },
      mutations,
      actions,
      getters
    }
  }
})
export default store
