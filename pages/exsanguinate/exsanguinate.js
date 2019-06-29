//detail.js
//获取应用实例
const app = getApp()

Page({
  data: {
    exsanguinateAddr:" ",
    exsanguinateAttr1:1,
    exsanguinateAttr2:2,
    exsanguinateAttr3:3,
    exsanguinateCost:100,
    exsanguinateId:1,
    exsanguinateReport:"没有大问题",
    exsanguinateTime:"2019-06-02",
    reportTime:"2019-06-02",
    userId:1
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (option) {
    var that = this
    wx.request({
      url: 'http://47.100.35.6:8080/examination', // 仅为示例，并非真实的接口地址
      data: {
        "examinationOrderId": option.examinationOrderId
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
        that.setData({ exsanguinateAddr: res.data.data.exsanguinateAddr})
        that.setData({ exsanguinateAttr1: res.data.data.exsanguinateAttr1 }) 
        that.setData({ exsanguinateAttr2: res.data.data.exsanguinateAttr2 }) 
        that.setData({ exsanguinateAttr3: res.data.data.exsanguinateAttr3 })
        that.setData({ exsanguinateCost: res.data.data.exsanguinateCost })
        that.setData({ exsanguinateId: res.data.data.exsanguinateId })
        that.setData({ exsanguinateReport: res.data.data.exsanguinateReport })
        that.setData({ exsanguinateTime: res.data.data.exsanguinateTime })
        that.setData({ reportTime: res.data.data.reportTime })  
        that.setData({ userId: res.data.data.userId }) 
        

        
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
