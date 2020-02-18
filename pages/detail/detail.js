// pages/detail/detail.js
var util = require('../../utils/util.js')
var zhuan_dingwei = require('../../lib/dingwei.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
 
  current: 0,
  show: false,
  //默认未获取地址
  hasLocation: false,
  info: '',
  
  list: [],
    longitude: 86.058070,
    latitude: 44.303310
},
getLocation(){
  wx.showLoading({
    title: '正在奋力定位中',
  })
  var that = this
  wx.getLocation({
    type: 'gcj02',
    success(res) {
      that.setData({
        latitude: res.latitude,
        longitude: res.longitude
      })
      wx.hideLoading()
    }
  })
},
/**
 * 生命周期函数--监听页面加载
 */
finish: function(data) {
  wx.request({
    url: getApp().globalData.url + 'api/cache/edit',
    method: 'post',
    data: data,
    header: {
      'Content-Type': 'application/json'
    },
    success: function(res) {

    },
    fail: function() {
      wx.showToast({
        title: '网络错误！',
        duration: 2000
      })
    },
    complete: function() {

    }
  })
},
back: function() {
  wx.navigateBack({
    delta: 1
  })
},
next: function() {
  this.setData({
    show: false
  })
},
onLoad: function(options) {
  wx.setStorage({
    key: 'ceid',
    data: options.id,
  })
  wx.showLoading({
    title: '奋力加载中......',
  })
  if (wx.getStorageSync('userInfo').status == 2 && wx.getStorageSync('userInfo').status != 3) {
    this.setData({
      show: true
    })
    var data = wx.getStorageSync('userInfo').data
    var ress = {}
    ress.data = data
    ress.status = 3
    wx.setStorage({
      key: 'userInfo',
      data: ress,
    })
  }
  var that = this
  wx.request({
    url: getApp().globalData.url + 'api/myhouse/detail',
    method: 'post',
    data: {
      uid: wx.getStorageSync('userInfo').data.id,
      id: options.id
    },
    header: {
      'Content-Type': 'application/json'
    },
    success: function(res) {
      console.log(res.data.data)
      var ass = res.data.as
      for (var i = 0; i < ass.length; i++) {
        ass[i].score = util.getLevel(ass[i].score)
      }
      that.setData({
        list: res.data.data,
        as: ass,
        current: wx.getStorageSync(wx.getStorageSync('ceid'))
      })
      wx.hideLoading()
    },
    fail: function() {
      wx.showToast({
        title: '网络错误！',
        duration: 2000
      })
    },
    complete: function() {

    }
  })

},
handleClick() {
  const addCurrent = this.data.current + 1;
  const current = addCurrent > 2 ? 0 : addCurrent;
  this.setData({
    'current': current
  })
},
getlocal_dingweui: function(e) {
  wx.showLoading({
    title: '正在定位中',
  })
  var that = this;
  wx.getLocation({
    type: 'gcj02',
    success: function(res) {
      that.setData({
        longitude: res.longitude,
        latitude: res.latitude
      })
      console.log(that.data.longitude)
      console.log(that.data.latitude)
      //进行地理位置坐标的转化
      var gcj02tobd09 = zhuan_dingwei.wgs84togcj02(that.data.longitude, that.data.latitude);
      var locs = wx.getStorageSync('loc');
      console.log(that.data.list)
      for (var i = 0; i < locs.length; i++) {
        if (locs[i].name == that.data.list[0].place) {
          var lat = locs[i].lat
          var lot = locs[i].lot
          var instance = locs[i].instance
        }
      }

      var dis = that.getDistance(gcj02tobd09[1], gcj02tobd09[0], lat, lot);


      wx.hideLoading()
      if (dis <= instance) {
        if (wx.getStorageSync(wx.getStorageSync('ceid')) == 0) {
          wx.setStorageSync(wx.getStorageSync('ceid'), 1)
          that.setData({
            current: 1
          })
        } else if (wx.getStorageSync(wx.getStorageSync('ceid')) == 1) {
          wx.setStorageSync(wx.getStorageSync('ceid'), 2)
          that.setData({
            current: 2
          })
          wx.showModal({
            title: '叮咚~~',
            content: '恭喜你，完成自习，学霸值增加！ ',
          })
          that.learn_finish()
          wx.setStorageSync(wx.getStorageSync('ceid'), 0)
        } else {
          wx.showModal({
            title: '叮咚~~',
            content: '自习已完成，请勿重复签到',
          })
        }
        wx.setStorageSync(wx.getStorageSync('ceid'), 1)

      } else {
        wx.showModal({
          title: dis,
          content: '未到指定地点，无法签到！',
        })
      }

    }
  })
},
star: function() {


  var tartime = this.data.list[0].date + ' ' + this.data.list[0].stime
  var tar2time = this.data.list[0].date + ' ' + this.data.list[0].uptime
  var sc = (new Date(tar2time)).getTime() - (new Date(tartime)).getTime()
  console.log(sc)
  var curtime = util.formatTime(new Date())
  if (curtime < tartime) {
    wx.showModal({
      title: '叮咚~~',
      content: '自习还未开始哟',
    })
    return 0;
  }
  if (curtime > tar2time) {
    wx.showModal({
      title: '叮咚~~',
      content: '啊，您的自习已结束',
    })
    return 0;
  }


  if (wx.getStorageSync(wx.getStorageSync('ceid')) == 0) {
    this.getlocal_dingweui();
  }
  if (wx.getStorageSync(wx.getStorageSync('ceid')) == 1) {
    if (new Date(curtime).getTime() < new Date(tar2time).getTime() - 1000 * 60 * 5) {
      wx.showModal({
        title: '叮咚~~',
        content: '自习结束前5分钟才能签到离开哟',
      })
      return 0;
    }
    this.getlocal_dingweui();
  }
  if (wx.getStorageSync(wx.getStorageSync('ceid')) == 2) {
    wx.showModal({
      title: '叮咚~~',
      content: '自习已完成，请勿重复签到',
    })
  }
},
learn_finish() {
  var that = this
  var tartime = this.data.list[0].date + ' ' + this.data.list[0].stime
  var tar2time = this.data.list[0].date + ' ' + this.data.list[0].uptime
  var sc = (new Date(tar2time)).getTime() - (new Date(tartime)).getTime()
  console.log(sc)
  wx.request({
    url: getApp().globalData.url + 'api/myhouse/sign',
    method: 'post',
    data: {
      uid: wx.getStorageSync('userInfo').data.id,
      id: wx.getStorageSync('ceid'),
      score: parseInt((sc / 1000) / 600)
    },
    header: {
      'Content-Type': 'application/json'
    },
    success: function(res) {
      wx.navigateBack({
        delta: 1
      })
    },
    fail: function() {
      wx.showToast({
        title: '网络错误！',
        duration: 2000
      })
    },
    complete: function() {

    }
  })
},
/**
 * 生命周期函数--监听页面初次渲染完成
 */
onReady: function() {

},

/**
 * 生命周期函数--监听页面显示
 */
onShow: function() {

},

/**
 * 生命周期函数--监听页面隐藏
 */
onHide: function() {

},

/**
 * 生命周期函数--监听页面卸载
 */
onUnload: function() {

},

/**
 * 页面相关事件处理函数--监听用户下拉动作
 */
onPullDownRefresh: function() {

},

/**
 * 页面上拉触底事件的处理函数
 */
onReachBottom: function() {

},

/**
 * 用户点击右上角分享
 */
onShareAppMessage: function() {

},
getDistance: function(lat1, lng1, lat2, lng2) {
  lat1 = lat1 || 0;
  lng1 = lng1 || 0;
  lat2 = lat2 || 0;
  lng2 = lng2 || 0;
  var rad1 = lat1 * Math.PI / 180.0;
  var rad2 = lat2 * Math.PI / 180.0;
  var a = rad1 - rad2;
  var b = lng1 * Math.PI / 180.0 - lng2 * Math.PI / 180.0;
  var r = 6378137;
  return (r * 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(rad1) * Math.cos(rad2) * Math.pow(Math.sin(b / 2), 2)))).toFixed(0)
},



})