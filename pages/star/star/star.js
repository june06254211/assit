Page({
  data: {
    items: [
      { name: 'USA', value: '开始专注' ,checked: 'true'},

    ]
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  }
})
