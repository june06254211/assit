//此处的js可以通过下方的github链接进行下载
var zhuan_dingwei = require('../../lib/dingwei.js');
//获取应用实例
const app = getApp()
Page({
  data: {
    //默认未获取地址
    hasLocation: false,
    info: '',
    longitude: '',
    latitude: ''
  },
  getlocal_dingweui: function (e) {
    var that = this;
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        that.setData({
          longitude: res.longitude,
          latitude: res.latitude
        })
        console.log(that.data.longitude)
        console.log(that.data.latitude)
        //进行地理位置坐标的转化
        var gcj02tobd09 = zhuan_dingwei.wgs84togcj02(that.data.longitude, that.data.latitude);
        console.log(gcj02tobd09);
        that.setData({
          longitude: gcj02tobd09[0],
          latitude: gcj02tobd09[1]
        })
        console.log('-------')
        that.get_baidu_dingwei()
      }
    })
  },
  onLoad: function () {
    this.getlocal_dingweui();

  },
  onShow: function () {
    // 调用接口
  }
})