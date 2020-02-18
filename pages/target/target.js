// pages/target/target.js
var cday = ['天','一','二','三','四','五','六']
var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    event:[],
    actions: [
      {
        name: '删除',
        color: '#fff',       
        width: 60,       
        background: '#FE8A8A'
      }
    ]
  },
  star:function(){
    wx.navigateTo({
      url: '../star/star',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    
    
  },
  
  getList: function (id) {
    var that = this
    if (id == 0) {
      var rid = 0
    }
    if (id == 1) {
      var rid = 'mon'
    }
    if (id == 2) {
      var rid = 'tus'
    }
    if (id == 3) {
      var rid = 'wed'
    }
    if (id == 4) {
      var rid = 'thu'
    }
    if (id == 5) {
      var rid = 'fri'
    }
    if (id == 6) {
      var rid = 'sat'
    }
    if (id == 7) {
      var rid = 'sun'
    }
    wx.request({
      url: getApp().globalData.url + 'api/target/lst',
      method: 'post',
      data: {
        id:rid,
        status:0,
        uid:wx.getStorageSync('userInfo').data.id
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        var arr = res.data.data
        console.log(res.data.data)
        for (var i = 0; i < arr.length; i++) {
          arr[i].stime = that.getT(arr[i].stime)
        }
        that.setData({
          list: arr,
          top: res.data.tdata
        })
        console.log(that.data.list)
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
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  getT: function (stime) {
    var timestamp = Date.parse(new Date());
    var days = timestamp-parseInt(stime) 
    console.log(days)
    var day = parseInt(days / (1000 * 60 * 60 * 24));
    return day + 1
 
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // if (wx.getStorageSync('index') == 2) {
    //   wx.redirectTo({
    //     url: '../fail/fail',
    //   })
    // } 
    var id = new Date().getDay();
    this.setData({
      cday: cday[id]
    })
    console.log(id)
    if(id == 0){
      id = 7 
    }
    

    this.getList(id)
    var that = this
    
   
    
    var that = this
    wx.showLoading({
      title: '加载中',
    })
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
  del: function (e) {
    var id = e.currentTarget.dataset.id;
    console.log(util.target_del(id))
    var id = new Date().getDay();
    console.log(id)
    if (id == 0) {
      id = 7
    }
    this.getList(id)

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
  nowstar:function(e){
    var lid = e.currentTarget.dataset.id
    var name = e.currentTarget.dataset.name
    var time = e.currentTarget.dataset.time
    console.log(lid,name,time);
    wx.navigateTo({
      url: '../countdown/countdown?id='+lid+'&tname='+name+'&time='+time,
      
    })
  },
  add: function () {
    wx: wx.navigateTo({
      url: '../add/add',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  all:function(){
    wx.navigateTo({
      url: '../list/list',
    })
  },
  

})