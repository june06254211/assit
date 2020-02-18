var app = getApp()


Page({
  data: {
    target:'',
    col:'gray',
    timelength:'',
    currentIndex:1,
    timelength:10,
    items: [
      { name: 'condition', value: '开始专注', checked: 'true' },
    ],
    imgUrls: [
      "90:00",
      "10:00",
      "25:00",
      "45:00",
      "60:00",

    ],
    img: [
      90,
      10,
      25,
      45,
      60,
    ],
    mon: 0,
    tus: 0,
    wed: 0,
    thu: 0,
    fri: 0,
    sat: 0,
    sun: 0
  },
 
  onLoad(e) {
    wx.getStorageSync('index') == 1
    console.log(e.title)
    
  },
  onShow: function () {
    // if(wx.getStorageSync('index') == 2){
    //   wx.redirectTo({
    //     url: '../fail/fail',
    //   })
    // }

  },
  swiperChange: function (e) {

    this.setData({
      currentIndex: (e.detail.current+1)%5,
      
    })
    console.log(this.data.img[this.data.currentIndex])
    this.data.timelength = this.data.img[this.data.currentIndex]

  },
  target: function (e) {
    console.log(e.detail.value)
    this.setData({
      target: e.detail.value
    })
  },
  handleClose1:function(){
    this.setData({
      visible1: false
    })
  },
  handleClick: function () {
    if(this.data.target ==""){
     wx.showToast({
       title: '请填写目标！',
       icon:'none'
     })
      return 0;
    }
    if(this.data.target.length > 8){
      this.setData({
        visible1:true
      })
      return 0;
    }
    var id = new Date().getDay()  
    this.sendMsg(id)
  },
  sendMsg: function (id) {
    
    if (id == 1) {
      this.data.mon = 1
    }
    
    if (id == 2) {
      this.data.tus =1
    }
    if (id == 3) {
      this.data.wed = 1
    }
    if (id == 4) {
      this.data.thu = 1
    }
    if (id == 5) {
      this.data.fri = 1
    }
    if (id == 6) {
      this.data.sat = 1
    }
    if (id == 0) {
      this.data.sun = 1
    }

    
    var that = this
    wx.request({
      url: getApp().globalData.url + 'api/target/add',
      method: 'post',
      data: {
        uid: wx.getStorageSync('userInfo').data.id,
        tname: that.data.target,
        ttime: that.data.timelength,
        tcontent: '学习使我快乐，我只想学习~',
        mon: that.data.mon,
        tus: that.data.tus,
        wed: that.data.wed,
        thu: that.data.thu,
        fri: that.data.fri,
        sat: that.data.sat,
        sun: that.data.sun,
        stime: Date.parse(new Date())
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        wx.navigateTo({
          url: '../countdown/countdown?tname=' + that.data.target + '&time=' + that.data.timelength + '&id=' + res.data.id,
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

})　