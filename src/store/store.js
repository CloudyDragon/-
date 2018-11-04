import vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

const isDev = process.env.NODE_ENV === 'development'

vue.use(Vuex)
const store = new Vuex.Store({
  strict: isDev, //用于不能从其他地方修改数据
  state: {
    imgListData: {},
    searchImgURL: {}
  },
  mutations,
  actions,
  getters
})
export default store
