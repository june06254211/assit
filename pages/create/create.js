// pages/target/target.js
var days = 0
var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */

  data: {
    long:'',
    
    index:0,
    value1:'',
    value2:'',   
    array3: ['公共课', '工学', '理学', '农学', '医学', '管理学', '哲学', '经济学', '法学', '教育学', '文学', '历史学', '艺术学','军事学'],
    array2: ['2', '3', '4'],
    array: [],    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  back(){
    wx.redirectTo({
      url: '../find/find',
    })
  },
 
  bindKeyInput1(e) {
    this.setData({
      value1: e.detail.value
    })
  },
  bindKeyInput2(e) {
    this.setData({
      value2: e.detail.value
    })
  },
  zjRequest (url, data) {
    // wx.showLoading({
    //   title: '努力创建中....',
    // })
    var status = wx.request({
      url: url,
      method: 'post',
      data: data,
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        if(res.data.status == 'no'){
          wx.showToast({
            title: '同一时间段只能存在一个自习',
            icon:'none',
            duration:3000
          })
          //wx.hideLoading()
          
        }
        if (res.data.status == 1) {
          wx.showToast({
            title: '恭喜你，创建成功！',
            icon: 'none',
            duration:1000
          })
          wx.redirectTo({
          url: '../myhouse/myhouse',
        })
        }
        if (res.data.status == 0) {
          wx.showToast({
            title: '创建失败！',
            icon: 'none',
            duration:1000
          })
        }
       // wx.hideLoading()
        
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
  finish() {
    var url = getApp().globalData.url+'api/date/add'
    var data = {}
    data.nickname = wx.getStorageSync('userInfo').data.nicheng
    data.avatarUrl = wx.getStorageSync('userInfo').data.avatarUrl
    data.uid = wx.getStorageSync('userInfo').data.id
    data.pnum = this.data.value2
    data.place = this.data.array[this.data.index]
    data.people = this.data.array2[this.data.index2]
    data.tab = this.data.array3[this.data.index3]
    data.date = this.data.date
    data.stime = this.data.time1
    data.uptime = this.data.time2
    data.zname = this.data.value1
    data.ctime = util.formatTime(new Date())
    data.total = this.data.array2[this.data.index2] -1
    if (util.getDate() <= this.data.date && util.formatTime(new Date()) < (this.data.date + ' ' + this.data.time1)) {

    } else {
      wx.showToast({
        title: '请填写正确的日期或时间！',
        icon: 'none'
      })
      return;
    }  
    if (data.pnum && data.place && data.people && data.tab && data.date && data.stime && data.uptime && data.zname){
      var res = this.zjRequest(url, data);
    }else{
      wx.showToast({
        title: '请将信息填写完整！',
      })
    }
    
    
  },
  getDate() {
   this.bindDateChange(e)
  },
  bindPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindPickerChange3(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index3: e.detail.value
    })
  },
  bindPickerChange2(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index2: e.detail.value
    })
  },
  bindTimeChange1(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    
    
    this.setData({
      time1: e.detail.value,
      lasttime: e.detail.value
    })
  },
  bindTimeChange2(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    var cu = this.data.date + ' ' +this.data.lasttime
    var cu2 = this.data.date + ' ' + e.detail.value
   
    if (new Date(cu).getTime() + 30 * 60 * 1000 > new Date(cu2).getTime()){
      wx.showToast({
        title: '时间间隔必须大于30分钟！',
        icon:'none'
      })
      return 0;
    }
    this.setData({
      time2: e.detail.value
    })
  },
  bindDateChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  onLoad: function (options) {
    
    this.setData({
      now:util.getDate()
    })
   
    var that = this
    wx.request({
      url: getApp().globalData.url + 'api/loc/index',
      method: 'post',
      data: {

      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        wx.setStorageSync('loc', res.data.loc)
        that.setData({
          array: res.data.loc_name
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

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
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
  
 
  
  

  
})