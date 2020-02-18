// pages/list/list.js
var events=[]
var util = require('../../utils/util.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    actions:[
      {
        name:"删除",
        color:"#fff",
        width:60,
        background:"#FE8A8A"
      }
    ],
    num:[],
    event:[],
    status:0,
    cling: "black",
    cled: "gray",
    pled:"none",
    cover: "none",
    pling:"block",
    title:"全部",
    sel:"none",
    click:-1,
    period:'',
    time:[
      {name:'全部',id:8,},
      {name:'周一',id:1,},
      {name:'周二',id:2,},
      {name:'周三',id:3,},
      {name:'周四',id:4,},
      {name:'周五',id:5,},
      {name:'周六',id:6,},
      {name:'周日',id:7,} 
    ]     
  },

  /**
   * 生命周期函数--监听页面加载
   */
  ing: function () {
    this.data.status = 0
    this.setData({
      cling:"black",
      cled:"gray",
      pling:"block",
      pled:"none"
    })
    this.getList(8,0)
  },
  ed:function () {
    this.data.status = 1
    this.setData({
      cling:"gray",
      cled:"black",
      pling:"none",
      pled:"block"
    })
    this.getList(8, 1)
  },
  select: function(){
    this.setData({
      sel:"block",
      cover:"block"
    })
  },
  
  onLoad: function (options) {
    // 获取数据
    this.getList(8,this.data.status)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (res) {
   
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
  // 界外点击关闭
  close:function(){
    this.setData({
      cover:"none",
      sel:"none"
    })
  },
  del:function(e){
    var id = e.currentTarget.dataset.id;
    console.log(util.target_del(id))
    this.onLoad()
    
  },
  // 改变日期选择
  changeColor: function (res) {
   
    var date = res.currentTarget.id - 1 + 2
    this.setData({
      title: res.currentTarget.dataset.name
    })
    
    var id = res.currentTarget.dataset.date
    var status = this.data.status
    console.log(id)
    this.getList(id, status)
    
    // 如果Id等于当前目标id
    if (this.data.clickId == res.currentTarget.id) {
      this.setData({
        // clickId = -1触发点击变化
        clickId: -1,
      })
      return;
    }
    this.setData({
      clickId: res.currentTarget.id,
      sel: "none",
      cover:"none"     
    })
    


  },
  getT: function (stime) {
    var timestamp = Date.parse(new Date());
    var days = timestamp-parseInt(stime)
    console.log(days)
    var day = parseInt(days / (1000 * 60 * 60 * 24));
    return day + 1
  },
  getList: function (id,status) {
    var that = this
    if (id == 0) {
      var rid = 0
    }
    if (id == 1) {
      var rid = 'mon'
    }
    if(id == 1){
      var rid = 'mon'
    }
    if (id == 2) {
      var rid = 'tus'
    }
    if (id == 3) {
      var rid = 'wed'
    }
    if (id == 4) {
      var rid = 'thu'
    }
    if (id == 5) {
      var rid = 'fri'
    }
    if (id == 6) {
      var rid = 'sat'
    }
    if (id == 7) {
      var rid = 'sun'
    }
    if (id == 8) {
      var rid = 8
    }

    wx.request({
      url: getApp().globalData.url + 'api/target/lst',
      method: 'post',
      data: {
        id:rid,
        status: status,
        uid:wx.getStorageSync('userInfo').data.id
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        var arr = res.data.data
        console.log(arr)
        for (var i = 0; i < arr.length; i++) {
          arr[i].stime = that.getT(arr[i].stime)
        }
        wx.hideLoading()
        if(res.data.status == 0){
          that.setData({
            list: arr
          })
        }else{
          that.setData({
            list2: arr
          })
        }
        
        
      },
      fail: function () {
        setTimeout(function () {
          wx.hideLoading()
        }, 2000)
        wx.showToast({
          title: '网络错误！',
          duration: 2000
        })
      },
      complete: function () {

      }
    })
  },
  nowstar:function(e){
    var lid = e.currentTarget.dataset.id
    var name = e.currentTarget.dataset.name
    var time = e.currentTarget.dataset.time
    console.log(lid, name, time);
    wx.navigateTo({
      url: '../countdown/countdown?id=' + lid + '&tname=' + name + '&time=' + time,

    })
  },
})