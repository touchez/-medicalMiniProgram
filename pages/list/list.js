//list.js
//获取应用实例
const app = getApp()

Page({
  data: {
    departmentlist: [{ departmentAddr: "地球村1号", departmentCost: 3, departmentId: "cccccc", departmentName: '风湿内科', hospitalId: "2016-09-02 21:40", hospitalName: "yiyuan" }, { departmentAddr: "地球村1号", departmentCost: 3, departmentId: "cccccc", departmentName: '风湿内科', hospitalId: "2016-09-02 21:40", hospitalName: "yiyuan" }],
    topic:'挂号',
    text:'5人',
    userInfo: {},
    hasUserInfo: false,
    yiyuan:'../../image/yiyuan.png',
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that =this
    wx.request({
      url: 'http://47.100.35.6:8080/departments/1', // 仅为示例，并非真实的接口地址
      data: {
        
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)

        that.setData({departmentlist: res.data.data })
      }
    })
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
