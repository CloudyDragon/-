import axios from 'axios'

export default {
  GETIMGLIST(store, parameter) {
    axios.post('http://www.suzumiya.club/frontend/img/list', parameter).then(res => {
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
