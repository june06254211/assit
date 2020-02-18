var valHandle; //定时器
var countdown;
var index
const ctx3 = wx.createCanvasContext("bgCanvas")
const ctx2 = wx.createCanvasContext("countdown")
var minite = '1'
var second = '00'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    cav: 'block',
    visible2: false,
    condition: "开始专注",
    index: 0,
    targetTime: 0,
    clearTimer: true,
    id: 0,
    lid: 0,
    event:'' 
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onLoad(options) {
    wx.setStorageSync('index', 2)
    if (this.data.id == 0) {
      this.data.lid = options.id
    } else {
      this.data.id = options.id
    }
    minite = options.time
    this.setData({
      event: options.tname,
      nindex: options.id,
      targetTime: new Date().getTime() + 6430000,
      time:options.time
    })      
    console.log(this.data.targetTime)
    this.clickStartBtn()
  },
  onUnload() {
    this.setData({
      clearTimer: true
    });
    clearInterval(valHandle)
  },
 
  onReady: function() {
    var that = this
    ctx3.setLineWidth(120)
    ctx3.arc(120, 120, 60, 0, 2 * Math.PI)
    ctx3.setStrokeStyle('white')
    ctx3.translate(60 / 2, 60 / 2)
    ctx3.stroke()
    ctx3.setFontSize(20)
    //ctx.fillText(that.data.event, 80, 40)
    var url = '../../images/study-.png'
    ctx3.drawImage(url, 30, 30, );
    ctx3.draw()
    ctx2.setFontSize(20)
    ctx2.fillText(minite + ":" + second, 125, 75)
    ctx2.draw()
  },
  //点击开始倒计时按钮
  clickStartBtn: function() {
    console.log("倒计时动画开始")
    var that = this
    second = '00'
    that.data.stepText = second + minite * 60 //重新设置一遍初始值，防止初始值被改变
    console.log(that.data.stepText)
    var step = that.data.stepText //定义倒计时
    var num = -0.5;
    // 起始点
    var decNum = Math.PI / 1.6 / step
    // 速度
    clearInterval(valHandle)
    function drawArc(endAngle) {
      ctx3.setLineWidth(120)
      ctx3.arc(120, 120, 60, 0, 2 * Math.PI)
      ctx3.setStrokeStyle('white')
      ctx3.translate(60 / 2, 60 / 2)
      ctx3.stroke()
      ctx3.beginPath()
      ctx3.setLineCap('round')
      ctx3.setLineWidth(10)
      ctx3.arc(120, 120, 120, 1.5 * Math.PI, endAngle, false)
      ctx3.setStrokeStyle('orange')
      ctx3.stroke()
      ctx3.setFontSize(20)
      //ctx.fillText(that.data.event, 80, 40)
      var url = '../../images/study-.png'
      ctx3.drawImage(url, 56, 90);
      ctx3.draw()
      ctx2.setFontSize(20)
      ctx2.fillText(minite + ":" + second, 125, 105)
      ctx2.draw()
    }
    valHandle = setInterval(function() {
      that.setData({
        stepText: parseInt(step)
      })
      step = (step - 1).toFixed(1)

      num += decNum
      drawArc(num * Math.PI)

      second = second - 1
      console.log(second)
      if (second <= 0 && minite >= 10) {
        minite = minite - 1
        second = 59

      }
      if (second <= 0 && minite < 10 && minite > 0) {
        minite = "0" + minite - 1
        second = 59

      }

      if (second < 10) {
        second = "0" + second
      }


      if (step <= 0) {
        clearInterval(valHandle) //销毁定时器
        if (that.data.id == 0) {
          that.sendOk(that.data.lid)
        } else {
          that.sendOk(that.data.id)
        }

      }
      if (minite == '0' && second <= 0) {
        clearInterval(valHandle) //销毁定时器
        if (that.data.id == 0) {
          that.sendOk(that.data.lid)
        } else {
          that.sendOk(that.data.id)
        }
      }
      that.setData({
        minite:minite,
        second:second
      })
    }, 1000)
    console.log(valHandle)
    var that = this;
    this.setData({
      index: that.data.index + 1
    });
    if (index = 0) {
      this.setData({
        condition: "开始专注",
      })
    }
    if (index = 1) {
      this.setData({
        condition: "结束专注",
      })
    } else {
      this.setData({
        condition: "结束专注",

      })
      clearInterval(valHandle)
    }
  },
  sendOk: function(id) {
    var that = this
    wx.request({
      url: getApp().globalData.url + 'api/target/update',
      method: 'post',
      data: {
        id: id,
        status: 1,
        alltime: that.data.time
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function(res) {
        wx.setStorageSync('index', 3)
        wx.redirectTo({
          url: '../finish/finish?id='+that.data.nindex+'&time='+that.data.time+'&event='+that.data.event
        })
      },
      fail: function() {
        setTimeout(function() {
          wx.hideLoading()
        }, 2000)
        wx.showToast({
          title: '网络错误！',
          duration: 2000
        })
      },
      complete: function() {

      }
    })
  },
  handleOpen2() {
    this.setData({
      visible2: true,
      cav:'none'
    });
    
  },
  handleClose2() {
    this.setData({
      visible2: false,
      cav:'block'
    });
   
  },
  handleClose1() {
    clearInterval(valHandle)
    this.setData({
      visible2: false
    });
    second = '00'
    wx.redirectTo({
      url: '../fail/fail?id=' + this.data.nindex + '&time=' + this.data.time + '&event=' + this.data.event
    })
    
  },
})