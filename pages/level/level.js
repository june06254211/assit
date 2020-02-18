// pages/level/level.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      url:'',
    rules: [
      { event: "当日签到", add: "签到1天 +1分\n", },
      { event: "个人自习", add: "每完成10分钟的自习加一分\n"},    
      { event: "共同自习", add: "每完成10分钟的自习加一分\n" }],
      level:[
        {
          le:'Lv1',
          name:'学民I',
          sc:'5'
        },
        {
          le: 'Lv2',
          name: '学民II',
          sc: '15'
        },
        {
          le: 'Lv3',
          name: '学民III',
          sc: '30'
        },
        {
          le: 'Lv4',
          name: '学民IV',
          sc: '50'
        },
        {
          le: 'Lv5',
          name: '学民V',
          sc: '100'
        },
        {
          le: 'Lv6',
          name: '学霸I',
          sc: '200'
        },
        {
          le: 'Lv7',
          name: '学霸II',
          sc: '500'
        },
        {
          le: 'Lv8',
          name: '学霸III',
          sc: '1000'
        },
        {
          le: 'Lv9',
          name: '学霸IV',
          sc: '2000'
        },
        {
          le: 'Lv10',
          name: '学霸V',
          sc: '3000'
        },
        {
          le: 'Lv11',
          name: '学神I',
          sc: '6000'
        },
        
        {
          le: 'Lv12',
          name: '学神II',
          sc: '10000'
        },
        {
          le: 'Lv13',
          name: '学霸III',
          sc: '18000'
        },
        {
          le: 'Lv14',
          name: '学魔',
          sc: '30000'
        },

      ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.setData({
        url: wx.getStorageSync('userInfo').data.avatarUrl,
        le:options.le,
        bs:options.bs,
        score:options.score,
        name:options.name

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

  }
})