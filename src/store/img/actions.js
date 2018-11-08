import axios from 'axios'

export default {
  GETIMGLIST(store, parameter) {
    axios.post('http://www.suzumiya.club/frontend/img/list', parameter).then(res => {
      //这里数据列表请求等以后重新做 这里的数据需要配合页码做数据拼接减少服务器压力
      store.commit('updatedImgListData', { data: res.data })
    }).catch(function (error) {
      console.log(error)
    })
  },
  GETPICTURE(store, parameter) {
    axios.post('http://www.suzumiya.club/frontend/img/imgsearch', parameter).then(res => {
      store.commit('updatedsearchImgURL', { data: res.data })
    }).catch(function (error) {
      console.log(error)
    })
  }
}
