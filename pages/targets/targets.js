// pages/select/select.js
var app = getApp();
var util = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    copyright: " Copyright © 2008-2019 软件开发部.",
    l:"none",
    p:"block",
    zd:"none",
    src: '',
    nickname: '',
    visible1: false,
    visible2: false,
    imgUrls: [
      
    ],
    headlines:[],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    score:0,
    index:1,
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  newsDetail:function(e){
    wx.navigateTo({
      url: '../newsDetail/newsDetail?id='+e.currentTarget.dataset.id,
    })
  },
  next:function(){    
    console.log(this.data.index)
    if (this.data.index == 1) {
      this.setData({
        show: true,
        p: 'none',
        l: 'block',
        zd: 'none'
      })
    }
    if (this.data.index == 2) {
      this.setData({
        show: true,
        p: 'none',
        l: 'none',
        zd: 'block'
      })
    }
    if(this.data.index == 3){
      this.setData({
        show:false,
        p:'none',
        l:'none',
        zd:'none'
      })
    }
    this.data.index++;
  },
  level:function(){
    wx.navigateTo({
      url: '../level/level?le=' + this.data.le + '&bs=' + this.data.bs + '&score=' + this.data.score + '&name=' + this.data.name,
    })
  },
  onLoad: function (options) { 
    //监测是否升级
    var userInfo = wx.getStorageSync("userInfo");
    if (typeof (userInfo) != "string"){     
        this.setData({
          src:userInfo.data.avatarUrl,
          nickname:userInfo.data.nicheng
        });
      if (typeof (wx.getStorageSync('cdate')) == "") {
        wx.setStorageSync('cdate', util.getDate())
        this.setData({
          visible1: true,         
        })
        var data = [0, 1, 2, 3, 4, 5, 6, , 7, 8, 9, 10, 11, 12, 13, 14, 15]
        wx.setStorageSync('rank', data)
        
      } else {
        if (util.getDate() != wx.getStorageSync('cdate')) {
          this.setData({
            visible1: true
          })
          wx.setStorageSync('cdate', util.getDate())
          console.log(1)
        }
        if (wx.getStorageSync('userInfo').status == 0) {
          this.setData({
            visible1: true,
            show: true
          })
          wx.setStorageSync('cdate', util.getDate())
          var data = wx.getStorageSync('userInfo').data        
          var ress = {}
          ress.data = data
          ress.status = 1
          wx.setStorage({
            key: 'userInfo',
            data: ress,
          })
          

        }
      }
    }else{      
      wx.reLaunch({
        url: '../logs/logs'
      })  
    }

  },
  scanner: function () {
    wx.navigateTo({
      url: '../myhouse/myhouse',
    })
  },
 

  
  seat: function () {
    wx.navigateTo({
      url: '../find/find',
    })
  },
  rule: function () {
    wx.navigateTo({
      url: '../rules/rules',
    })
  },
  target: function () {
    wx.navigateTo({
      url: '../target/target',
    })
  },
  pcenter: function () {
    // wx.navigateTo({
    //   url: '../mine/mine',
    // })
    wx.showToast({
      title: '功能测试中...',
      icon:'none'
    })
  },
  handleClose1() {
    var that = this
    this.setData({
      visible1: false
    });
    wx.request({
      url: app.globalData.url + 'api/score/add',
      method: 'post',
      data: {
        score:1,
        uid: wx.getStorageSync('userInfo').data.id
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        that.setData({
          score:that.data.score +1
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
  handleClose2() {
    var that = this
    this.setData({
      visible2: false
    });  
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
    var that = this
    wx.request({
      url: app.globalData.url + 'api/score/index',
      method: 'post',
      data: {
        uid:wx.getStorageSync('userInfo').data.id
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        that.juge(res.data.data.score)
        wx.setStorageSync('le', res.data.data.score)
        that.setData({
          headlines:res.data.lst
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  juge:function(s){
    if(s>=0&&s<5){
      this.setData({
        score:s,
        le:1,
        name: '学民I',
        bs:5
      })
    }
    if (s >= 5 && s < 15) {
      this.setData({
        score: s,
        le: 2,
        name: '学民II',
        bs: 15
      })
      
      if (s == 5 && typeof (wx.getStorageSync('1')) == "string") {
        this.setData({
          visible2: true
        })
        wx.setStorageSync('1',0 )
      }
    }
    if (s >= 15 && s <= 30) {
      this.setData({
        score: s,
        le: 3,
        name: '学民III',
        bs: 30
      })
      if (s == 15 && typeof (wx.getStorageSync('2')) == "string") {
        this.setData({
          visible2: true
        })
        
        wx.setStorageSync('2', 0)
      }
    }
    if (s >= 30 && s < 50) {
      this.setData({
        score: s,
        le: 4,
        name: '学民IV',
        bs: 50
      })
      if (s == 30 && typeof (wx.getStorageSync('3')) == "string") {
        this.setData({
          visible2: true
        })
        wx.setStorageSync('3', 0)
      }
    }
    if (s >=50 && s < 100) {
      this.setData({
        score: s,
        le: 5,
        name: '学民V',
        bs: 100
      })
      if (s == 50 && typeof (wx.getStorageSync('4')) == "string") {
        this.setData({
          visible2: true
        })
        wx.setStorageSync('4', 0)
      }
    }
    if (s >= 100 && s < 200) {
      this.setData({
        score: s,
        le: 6,
        name: '学霸I',
        bs:200
      })
      if (s == 100 && typeof (wx.getStorageSync('5')) == "string") {
        this.setData({
          visible2: true
        })
        wx.setStorageSync('5', 0)
      }
    }
    if (s >= 200 && s < 500) {
      this.setData({
        score: s,
        le: 7,
        name: '学霸II',
        bs:500
      })
      if (s == 200 && typeof (wx.getStorageSync('6')) == "string") {
        this.setData({
          visible2: true
        })
        wx.setStorageSync('6', 0)
      }
    }
    if (s >= 500 && s < 1000) {
      this.setData({
        score: s,
        le: 8,
        name: '学霸III',
        bs:1000
      })
      if (s == 500 && typeof (wx.getStorageSync('7')) == "string") {
        this.setData({
          visible2: true
        })
        wx.setStorageSync('7', 0)
      }
    }
    if (s >= 1000 && s < 2000) {
      this.setData({
        score: s,
        le: 9,
        name: '学霸IV',
        bs:2000
      })
      if (s == 1000 && typeof (wx.getStorageSync('8')) == "string") {
        this.setData({
          visible2: true
        })
        wx.setStorageSync('8', 0)
      }
    }
    if (s >= 2000 && s < 3000) {
      this.setData({
        score: s,
        le: 10,
        name: '学霸V',
        bs:3000
      })
      if (s == 2000 && typeof (wx.getStorageSync('9')) == "string") {
        this.setData({
          visible2: true
        })
        wx.setStorageSync('9', 0)
      }
    }
    if (s >= 3000 && s < 6000) {
      this.setData({
        score: s,
        le: 11,
        name: '学神I',
        bs: 6000
      })
      if (s == 3000 && typeof (wx.getStorageSync('10')) == "string") {
        this.setData({
          visible2: true
        })
        wx.setStorageSync('10', 0)
      }
    }

    if (s >= 6000 && s < 10000) {
      this.setData({
        score: s,
        le: 12,
        name:'学神II',
        bs: 10000
      })
      if (s == 6000 && typeof (wx.getStorageSync('12')) == "string") {
        this.setData({
          visible2: true
        })
        wx.setStorageSync('12', 0)
      }
    }
    if (s >= 10000 && s < 18000) {
      this.setData({
        score: s,
        le: 13,
        name:'学霸III',
        bs: 18000
      })
      if (s == 10000 && typeof (wx.getStorageSync('13')) == "string") {
        this.setData({
          visible2: true
        })
        wx.setStorageSync('13', 0)
      }
    }
    if (s >= 18000 && s < 30000) {
      this.setData({
        score: s,
        le: 14,
        name:'学魔',
        bs:30000
      })
      if (s == 18000 && typeof (wx.getStorageSync('14')) == "string") {
        this.setData({
          visible2: true
        })
        wx.setStorageSync('14', 0)
      }
    }
    
  }
})