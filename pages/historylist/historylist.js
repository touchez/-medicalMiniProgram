//list.js
//获取应用实例
const app = getApp()

Page({
  data: {
    historylist: [{ generalName: "糖尿病", date: 3, addr: "cccccc", medicalRecordId: 1 }, { generalName: "糖尿病", date: 3, addr: "cccccc", medicalRecordId: 1 }, { generalName: "糖尿病", date: 3, addr: "cccccc", medicalRecordId: 1 }],
    topic:'挂号',
    text:'5人',
    userInfo: {},
    hasUserInfo: false,
    yiyuan:'../../image/yiyuan.png',
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userId:"1"
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
      url: 'http://47.100.35.6:8080/medicalRecord/'+app.globalData.userId, // 仅为示例，并非真实的接口地址
      data: {
        
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)

        that.setData({historylist: res.data.data })
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
