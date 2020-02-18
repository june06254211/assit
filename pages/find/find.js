// pages/find/find.js
var util = require('../../utils/util.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    show:false,
    joinname: '马上加入',
    unjoinname: '已满',
    disabled: true,
    undisabled: false,
    current:'',
    loaddata:'',
    pnum:1,
    eid:0,
    current_scroll: '公共课',
    tabs:[
      {
        key:"公共课",
        title:'公共课'
      },
      {
        key: "工学",
        title: '工学'
      },
      {
        key: "理学",
        title: '理学'
      },
      {
        key: "农学",
        title: '农学'
      },
      {
        key: "医学",
        title: '医学'
      },

      {
        key: "管理学",
        title: '管理学'
      },

      {
        key: "哲学",
        title: '哲学'
      },

      {
        key: "经济学",
        title: '经济学'
      },

      {
        key: "法学",
        title: '法学'
      },

      {
        key: "教育学",
        title: '教育学'
      },

      {
        key: "文学",
        title: '文学'
      },

      {
        key: "历史学",
        title: '历史学'
      },

      {
        key: "艺术学",
        title: '艺术学'
      },

      {
        key: "军事学",
        title: '军事学'
      }

    ],
    //pull down
    //下拉刷新
    pageIndex: 1,
    loadding: false,
    pullUpOn: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    if (wx.getStorageSync('userInfo').status != 2 && wx.getStorageSync('userInfo').status != 3){
      this.setData({
        show:true
      })
      var data = wx.getStorageSync('userInfo').data
      var ress = {}
      ress.data = data
      ress.status = 2
      wx.setStorage({
        key: 'userInfo',
        data: ress,
      })
    }
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
    this.getList('公共课');
    
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

  //页面相关事件处理函数--监听用户下拉动作
  onPullDownRefresh: function () {
    this.getList(this.data.current_scroll)
    //延时为了看效果
    setTimeout(() => {
      this.setData({
        
        pageIndex: 1,
        pullUpOn: true,
        loadding: false
      })
      wx.stopPullDownRefresh()
      wx.showToast({
        title: '刷新成功',
        icon: "none"
      })
    }, 200)
  },

  // 页面上拉触底事件的处理函数
  onReachBottom: function () {
    var that = this
    if (!this.data.pullUpOn) return;
    this.setData({
      loadding: true
    }, () => {
      
      that.loadData(that.data.current_scroll,that.data.pageIndex)

    })
  },
  loadData: function (tab,index) {
    wx.showLoading({
      title: '奋力加载中......',
    })
    var that = this
    wx.request({
      url: getApp().globalData.url + 'api/date/loaddata',
      method: 'post',
      data: {
        tab: tab,
        uid: wx.getStorageSync('userInfo').data.id,
        index:index

      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        if (res.data.status == 0) {
          that.setData({
            loadding: false,
            pullUpOn: false
          })
          wx.hideLoading()
          wx.showToast({
            title: '无更多自习室',
            icon:'none'
          })
        } else if(res.data.status==2) {
          that.setData({
            loadding: false
          })
          wx.hideLoading()
          wx.showToast({
            title: '服务器出错',
            icon: 'none'
          })
                
        }else{
          var arr = res.data.data
          for (var i = 0; i < arr.length; i++) {
            arr[i].score = util.getLevel(arr[i].score)
          }
          console.log(that.data.loaddata)
          that.setData({
            loaddata: arr
          })
          that.setData({
            lst: that.data.lst.concat(that.data.loaddata),
            pageIndex: that.data.pageIndex + 1
          })
        }
        
        wx.hideLoading()

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
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  next:function(){
    this.setData({
      show:false
    })
  },
  handleChangeScroll({ detail }) {
    this.setData({
      current_scroll: detail.key,
      current: detail.key,
      pageIndex: 1,
      loadding: false,
      pullUpOn: true
    });
    
    this.getList(this.data.current_scroll)
  },
  getList: function (tab) {
    wx.showLoading({
      title: '奋力加载中......',
    })
    var that = this
    wx.request({
      url: getApp().globalData.url + 'api/date/lst',
      method: 'post',
      data: {
        tab:tab,
        uid:wx.getStorageSync('userInfo').data.id
        
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res)   
        if(res.data.status == 0 ){
          var arr = res.data.data
          that.setData({
            lst: ''
          })  
        } else{
          var arr = res.data.data
          for(var i=0;i<arr.length;i++){
            arr[i].score = util.getLevel(arr[i].score)
          }
          that.setData({
            lst: arr
          }) 
        }  
        
        wx.hideLoading()
        
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
        wx.hideLoading()
      }
    })
  },
  create: function () {
    wx.navigateTo({
      url: '../create/create',
     
    })
  },
  myhouse: function () {
    wx.navigateTo({
      url: '../myhouse/myhouse',
    })
  },
  join:function(e){
    this.data.eid = e.currentTarget.dataset.id
    this.setData({
      visible2:true
    })
  },
  handleCloseo:function(){
    var that = this
    wx.request({
      url: getApp().globalData.url + 'api/cache/index',
      method: 'post',
      data: {
        eid: that.data.eid,
        uid: wx.getStorageSync('userInfo').data.id
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        if(res.data.status == 'doing'){
          wx.showToast({
            title: '自习已开始，不能加入！',
            icon: 'none',
            duration: 3000
          })
          return;
        }
        if(res.data.status =='no'){
          wx.showToast({
            title: '同一时间段只能加入一个自习！',
            icon: 'none',
            duration:3000
          })
          return;
        }
        if (res.data.status == 1) {
          wx.showToast({
            title: '请勿重复加入',
            icon: 'fail',
            duration: 2000
          })
        } else if (res.data.status == 0) {
          wx.showToast({
            title: '加入成功',
            icon: 'success',
            duration: 2000
          })
          wx.redirectTo({
            url: '../detail/detail?id=' + that.data.eid,
          })
        } else if (res.data.status == 2) {
          wx.showModal({
            title: 'TIP',
            content: '该自习室人数已满！',
          })
        } else {
          wx.showModal({
            title: 'TIP',
            content: '系统出错，请联系管理员',
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
    this.setData({
      visible2: false
    })
  
  },
  handleClosec: function () {
    this.setData({
      visible2: false
    })
  }
})