// pages/finish/finish.js


const ctx = wx.createCanvasContext("bgCanvas")
const ctx2 = wx.createCanvasContext("post")
const ctx3 = wx.createCanvasContext("postcontent")
const util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    event:'',
    number:'',
    show:'none',
    user:'',
    avatar:'',
    id:'',
    time:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    util.addScore(options.time/10)
    this.setData({
      event:options.event,
      id:options.id,
      time:options.time
    })
    console.log(options)
    ctx.setLineWidth(120)
    ctx.arc(120, 120, 60, 0,  Math.PI*2)
    ctx.setStrokeStyle('white')
    ctx.translate(140/ 2, 140 / 2)
    ctx.stroke()
    var url = '../../images/finish.png'
    ctx.drawImage(url, 8, 30);
    ctx.draw()
    var that = this
    wx.getUserInfo({
      success(res) {
        const userInfo = res.userInfo
        const nickName = userInfo.nickName
        const avatarUrl = userInfo.avatarUrl
        that.setData({
          user:nickName,
          avatar:avatarUrl
        })
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
  
  go:function(){
    wx.redirectTo({
      url: '../countdown/countdown?id=' + this.data.id + '&time=' + this.data.time + '&tname=' + this.data.event
    })
    console.log(this.data.id, this.data.time, this.data.event)
  },
  post:function(){
    this.setData({
      show:"block"
    })
    var that = this 
    var user = that.data.user
    var avatar= that.data.avatar
    var url ='../../images/suc.png'
    var timestamp = Date.parse(new Date());
    var date = new Date(timestamp);
    //获取年份  
    var Y = date.getFullYear();
    //获取月份  
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    //获取当日日期 
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    var thetime = Y + '年' + M + '月' + D + '日';
    console.log(thetime)

    ctx3.fillStyle = "white"
    ctx3.fillRect(0,0,800,700)
    ctx3.drawImage(url,75,100,220,410)
    ctx3.fillStyle = "gray"
    ctx3.fillRect(0, 570, 800,0.5)
    ctx3.arc(45, 50, 30, 0, Math.PI * 2)
    ctx3.setFontSize(25)
    ctx3.fillStyle = "red"
    ctx3.fillText(user, 80, 60)
    ctx3.setFontSize(20)
    ctx3.fillStyle = "black"
    ctx3.fillText(thetime, 230, 60)
    ctx3.setFontSize(20)
    // ctx3.fillStyle = "black"
    ctx3.fillText('一起自习吧', 20, 600)
    ctx3.setFontSize(15)
    // ctx3.fillStyle = "black"
    ctx3.fillText('求知若饥，虚心若愚', 20, 630)
    ctx3.setFontSize(15)
    // ctx3.fillStyle = "black"
    ctx3.font = "normal bold 15px Arial"
    ctx3.fillText('Stay Hungry,Stay Foolish', 20, 660)
    ctx3.clip();
    ctx3.save()
    ctx3.drawImage(avatar, 15, 20, 60, 60)
    ctx3.draw()

    var that = this
    setTimeout(function(){ wx.canvasToTempFilePath({

      destWidth: 400,
      destHeight: 800,
     
      quality:1,

      canvasId: 'postcontent',
      success: function (res) {
        var tempFilePath = res.tempFilePath;
        that.setData({
          imagePath: tempFilePath,
        })
      }
    })
    },200)
  },
  hidden:function(){
    this.setData({
      show:'none;'
    })
  },
  save:function(){
    var that = this
    wx.saveImageToPhotosAlbum({
      filePath: that.data.imagePath,
      success(res) {
        wx.showModal({
          content: '图片已保存到相册，赶紧晒一下吧~',
          showCancel: false,
          confirmText: '好的',
          confirmColor: '#333',
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定');
              /* 该隐藏的隐藏 */
              that.setData({
                maskHidden: false
              })
            }
          }
        })
      }
    })
  }
})