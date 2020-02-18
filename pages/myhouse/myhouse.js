// pages/find/find.js
const { $Message } = require('../../dist/base/index');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    joinname: '去自习',
    unjoinname: '已满',
    disabled: true,
    undisabled: false,
    current: '',
    pnum: 1,
    current_scroll: 'index',
    tabs: [
      {
        key: 'index',
        title: '已加入'
      },
      {
        key: 'finish',
        title: '已完成'
      }
     

     

    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getList('index')
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  handleChangeScroll({ detail }) {
    this.setData({
      current_scroll: detail.key,
      current: detail.key,
    });

    this.getList(this.data.current_scroll)
  },
  getList: function (index) {
    console.log(index)
    wx.showLoading({
      title: '奋力加载中......',
    })
    var that = this
    var id = wx.getStorageSync('userInfo').data.id
    if(index == 'index'){
      var url = getApp().globalData.url + 'api/myhouse/index';
    }else{
      var url = getApp().globalData.url + 'api/myhouse/finish';
    }
    console.log(id)
    wx.request({
      url: url,
      method: 'post',
      data: {
        id: id
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res)
        // if (res.data.status == 0) {
        //   var arr = res.data.data
        //   that.setData({
        //     lst: ''
        //   })
        // } else {
        //   var arr = res.data.data
        //   that.setData({
        //     lst: arr
        //   })
        // }
        that.setData({
          lst: res.data.data
          })
        
        wx.hideLoading()
      },
      fail: function () {
        setTimeout(function () {
          wx.hideLoading()
        }, 2000)
        wx.showToast({
          title: '网络错误！',
          duration: 2000
        })
      },
      complete: function () {

      }
    })
  },
  create: function () {
    wx.navigateTo({
      url: '../create/create',

    })
  },
  myhouse: function () {
    wx.navigateBack({
      delta:1
    })
  },
  join: function (e) {
    var that = this
    wx.navigateTo({
      url: '../detail/detail?id=' + e.currentTarget.dataset.id,
    })
  }
})