const util = require('../../utils/util.js')
Page({
  data: {
    article:{} 
  },
  onLoad: function (options) {
    var id = options.id
    var that = this
    wx.request({
      url: getApp().globalData.url + 'api/score/getDetail',
      method: 'post',
      data: {
        id:id
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) { 
        that.setData({
          article: res.data.arc[0]
        })
      },
      fail: function () {
        wx.showToast({
          title: '网络错误！',
          duration: 2000
        })
      },
      complete: function () {

      }
    })
  },
  
})