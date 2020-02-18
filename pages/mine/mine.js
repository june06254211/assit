var app = getApp();
Page({
  data: {
    src:"",
    nickname:"",visible2:false
  },
  onLoad: function (options) {
    var userInfo = wx.getStorageSync("userInfo")
    this.setData({
      src: userInfo.data.avatarUrl,
      nickname: userInfo.data.nicheng
    });
  },
  onReady:function(){
    this.setData({
      visible2:true
    })
  },
  handleClose2:function(){
    this.setData({
      visible2: false
    })
  },
  step: function () {
    wx.navigateTo({
      url: '../timeaxis/timeaxis',
    })
  },
  rules:function(){
    wx.navigateTo({
      url: '../rules/rules',
    })
  }

    
})