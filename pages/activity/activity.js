//list.js
//获取应用实例
const app = getApp()

Page({
  data: {
    nopaylist: [],
    paylist: [],
    guahaolist: [],
    topic: '挂号',
    text: '5人',
    userInfo: {},
    hasUserInfo: false,
    yiyuan: '../../image/yiyuan.png',
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userId: "1"
  },
  backtohome: function() {
    wx.redirectTo({
      url: "../activity/activity"
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    var that = this
    wx.request({
      url: 'http://47.100.35.6:8080/guahao/active', // 仅为示例，并非真实的接口地址
      data: {
        userId: app.globalData.userId
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
        that.setData({
          guahaolist: res.data.data
        })
      }
    })
    wx.request({
      url: 'http://47.100.35.6:8080/examination/' + app.globalData.userId, // 仅为示例，并非真实的接口地址
      data: {
        payState: 0
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)

        that.setData({
          nopaylist: res.data.data
        })
      }
    })
    wx.request({
      url: 'http://47.100.35.6:8080/examination/' + app.globalData.userId, // 仅为示例，并非真实的接口地址
      data: {
        payState: 1
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
        that.setData({
          paylist: res.data.data
        })
      }
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})