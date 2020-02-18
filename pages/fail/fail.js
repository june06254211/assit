// pages/fail/fail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    wx.setStorageSync('index') == 0
    this.setData({
      index: Math.floor(Math.random() * 50 + 50),
      nindex:options.id,
      time:options.time,
      event:options.event
    })
  },
  restar: function () {
    wx.redirectTo({
      url: '../countdown/countdown?id=' + this.data.nindex + '&time=' + this.data.time + '&tname=' + this.data.event
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
  back:function(){
    
    wx.redirectTo({
      url: '../targets/targets',
    })
  },
  
})