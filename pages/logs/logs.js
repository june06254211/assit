var app = getApp();

var login = function (code, encrypteData, iv) {
  var that = this
  //创建一个dialog提示
  wx.showToast({
    title: '正在登录...',
    icon: 'loading',
    duration: 5000
  });
  wx.request({
    url: app.globalData.url + 'api/index/wxlogin1',
    method: 'post',
    data: {
      code: code,
      encrypteData: encrypteData,
      iv: iv
    },
    header: {
      'Content-Type': 'application/json'
    },
    success: function (res) {
      wx.hideToast()
      console.log(app.globalData.userInfo);
      app.globalData.userInfo = res.data
      console.log(app.globalData.userInfo);
      wx.setStorageSync("userInfo", res.data);
      console.log(wx.getStorageSync("userInfo"));
      wx.reLaunch({
        url: '../targets/targets',
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
}
module.exports.login = login
Page({
  data: {
    //判断小程序的API，回调，参数，组件等是否在当前版本可用。
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onReady() {
    
  },
  onLoad: function () {
    
    var that = this
    wx.login({
      success: function (res) { //登录成功
        //console.log(res)
        if (res.code) {
          var code = res.code
          wx.getUserInfo({ //getUserInfo流程
            success: function (data) { //getUserInfo获取用户信息成功
              //console.log(data)
              //encrypteData加密密文，iv偏移向量，encodeURIComponent把加密字符串解密成URI字符串
              var encryptedData = encodeURIComponent(data.encryptedData);
              var iv = data.iv;
              //请求自己的服务器
              login(code, encryptedData, iv);
              //已经授权的用户
              console.log(app.globalData.userInfo);
              wx.switchTab({
                url: '../mine/mine',
              })
            }
          })
        } else {
          console.log('用户没有进行授权！' + res.errMsg)
        }
      }
    });
  },
  bindGetUserInfo: function (e) {
    //console.log(e)
    if (e.detail.userInfo) {
      //用户按了允许授权的按钮
      var that = this
      wx.login({
        success: function (res) {
          if (res.code) {
            var code = res.code
            wx.getUserInfo({
              success: function (data) {
                var encryptedData = encodeURIComponent(data.encryptedData);
                var iv = data.iv;
                //请求自己的服务器
                login(code, encryptedData, iv);
              }
            })
          }
        }
      })
      //授权成功后，跳转进入小程序首页
      wx.switchTab({
        url: '../mine/mine'
      })
    } else {
      //用户按了拒绝按钮
      wx.showModal({
        title: '警告',
        content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
        showCancel: false,
        confirmText: '返回授权',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击了“返回授权”')
          }
        }
      })
    }
  },
})