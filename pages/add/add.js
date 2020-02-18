// pages/target/target.js
var days = 0
Page({

  /**
   * 页面的初始数据
   */

  data: {
    buttons: [{ id: 1, name: '周一' }, { id: 2, name: '周二' }, { id: 3, name: '周三' }, { id: 4, name: '周四' }, { id: 5, name: '周五' }, { id: 6, name: '周六' }, { id: 7, name: '周日' },],
    long:'',
    index:0,
    say:'',
    event:'',
    arr:[],
    events:[],
    sayings:[],
    time: ['10', '25', '30', '60', '90'],
    times:[],
    periods:[],
    clickId: -1,
    mon: 0,
    tus: 0,
    wed: 0,
    thu: 0,
    fri: 0,
    sat: 0,
    sun: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  sendMsg: function () {
    var index = this.data.arr
    for(var i = 0 ; i < index.length ; i++){
      if (index[i] == 1){
        this.data.mon = 1
      }
      if (index[i] == 2) {
        this.data.tus = 1
      }
      if (index[i] == 3) {
        this.data.wed = 1
      }

      if (index[i] == 4) {
        this.data.thu = 1
      }
      if (index[i] == 5) {
        this.data.fri = 1
      }
      if (index[i] == 6) {
        this.data.sat = 1
      }
      if (index[i] == 7) {
        this.data.sun = 1
      }
     
    }
    var that = this
    wx.request({
      url: getApp().globalData.url + 'api/target/add',
      method: 'post',
      data: {
        uid:wx.getStorageSync('userInfo').data.id,
        tname:that.data.event,
        ttime: that.data.long,
        tcontent: that.data.saying,
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
        if(res.data.status ==1){

        }else{
          wx.showToast({
            title: '目标设立失败,请联系管理员',
            duration: 2000
          })
        }
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
  onLoad: function (options) {

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
  saying: function (e) {
    console.log(e.detail.value)
    this.setData({
      say: e.detail.value
    })
  },
  event: function (e) {
    console.log(e.detail.value)
    this.setData({
      event: e.detail.value
    })
  },
  colorchange:function(e){
    var period=[]
    var day=''
    var date = e.currentTarget.dataset.date
    days++
      day=date
      period.push(day)
      console.log(period)
      // 这里还差个for循环添加周期信息
  },
  changeColor: function (res) {
    var arr = []
    var ctime = ''
    var date = res.currentTarget.id - 1 + 2
    ctime = date
    arr.push(ctime)
    console.log(arr)
    // 如果Id等于当前目标id
    if (this.data.clickId == res.currentTarget.id) {
      this.setData({
        // clickId = -1触发点击变化
        clickId: -1
      })
      return;
    }
    this.setData({
      clickId: res.currentTarget.id
    })
    // 循环，令i=0 i<数组arr的长度 i+1
    for (var i = 0; i < date; i++) {
      if (arr[i] == '') {
      }
      console.log(this.data.time[date - 1])
    }
    this.setData({
      long: this.data.time[date - 1]
    })
    console.log(this.data.long)
    
    console.log()

  },
  checkButtonTap: function (e) {
    // 修改日期样式
    let id = e.currentTarget.dataset.id
    console.log(id)
    for (let i = 0; i < this.data.buttons.length; i++) {
      if (this.data.buttons[i].id == id) {
        if (this.data.buttons[i].checked == true) {
          this.data.buttons[i].checked = false;
        } else {
          this.data.buttons[i].checked = true;
        }
      }
    }
    this.data.arr.push(id)
    console.log(this.data.arr)
    this.setData({
      buttons: this.data.buttons
    })
  },

  submit: function (res) {
    if (this.data.event && this.data.arr.length > 0 && this.data.long !='') {
      this.sendMsg();
      wx.navigateBack({
        delta :1
      })
    } else {
      wx.showModal({
        title: '叮咚~~',
        content: '请将信息填写完整！',
      })
    }

  }
})