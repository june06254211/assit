const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
const zjRequest = function(url,data)  {
  var source = {};
  var status = wx.request({
    url:url,
    method: 'post',
    data:data,
    header: {
      'Content-Type': 'application/json'
    },
    success: function (res) {
      source = res
      return source
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
const getDays = function (sDate){
  var sdate = new Date(sDate.replace(/-/g, "/"));
  var now = new Date();
  var days = now.getTime() - sdate.getTime();
  var day = parseInt(days / (1000 * 60 * 60 * 24));
  return day;
}
const getDate = function () {
  var date = new Date();
  var seperator1 = "-";
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  var currentdate = year + seperator1 + month + seperator1 + strDate;
  return currentdate;
}
const dDate = function(nows){ 
  var date = new Date(nows);
  var Y = date.getFullYear() + '-';
  var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  var D = date.getDate() + ' ';
  var h = date.getHours() + ':';
  var m = date.getMinutes() + ':';
  var s = date.getSeconds();
  console.log(Y + M + D + h + m ); //呀麻碟
// 输出结果：2014-04-23 18:55:49
}
const mDate = function (nows) {
  var date = new Date().getTime();
  var Y = date.getFullYear() + '-';
  var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  var D = date.getDate() + ' ';
  var h = date.getHours() + ':';
  var m = date.getMinutes() + ':';
  var s = date.getSeconds();
  return Y + M + D + h + m
  // 输出结果：2014-04-23 18:55:49
}
const addScore = function (score){
  wx.request({
    url: getApp().globalData.url + 'api/score/add',
    method: 'post',
    data: {
      uid: wx.getStorageSync('userInfo').data.id,
      score: score
    },
    header: {
      'Content-Type': 'application/json'
    },
    success: function (res) {

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
const target_del = function (id) {
  wx.request({
    url: getApp().globalData.url + 'api/target/del',
    method: 'post',
    data: {
      uid: wx.getStorageSync('userInfo').data.id,
      id: id
    },
    header: {
      'Content-Type': 'application/json'
    },
    success: function (res) {
        wx.showToast({
          title: '成功',
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
const getLevel = function(s){
  if (s >= 0 && s < 5) {
    return 1
  }
  if (s >= 5 && s < 15) {
    return 2
  }
  if (s >= 15 && s <= 30) {
    return 3
  }
  if (s >= 30 && s < 50) {
    return 4
  }
  if (s >= 50 && s < 100) {
    return 5
  }
  if (s >= 100 && s < 200) {
    return 6
  }
  if (s >= 200 && s < 500) {
    return 7
  }
  if (s >= 500 && s < 1000) {
    return 8
  }
  if (s >= 1000 && s < 2000) {
    return 9
  }
  if (s >= 2000 && s < 3000) {
    return 10
  }
  if (s >= 3000 && s < 6000) {
    return 11
  }

  if (s >= 6000 && s < 10000) {
    return 12
  }
  if (s >= 10000 && s < 18000) {
    return 13
  }
  if (s >= 18000 && s < 30000) {
    return 14
  }
}
module.exports = {
  formatTime: formatTime,
  zjRequest: zjRequest,
  getDays :getDays,
  getDate: getDate,
  target_del: target_del,
  dDate: dDate,
  mDate: mDate,
  getLevel: getLevel,
  addScore:addScore  
}
