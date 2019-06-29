//detail.js
//获取应用实例
const app = getApp()

Page({
  data: {
    ctAddr:" ",
    ctCost: 100,
    ctId: 1,
    ctImg: 1,
    ctPart:"腹部",
    ctReport:"没有大问题",
    ctTime:"2019-06-02",
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
        if(res.data.code==0){
          that.setData({ ctAddr: res.data.data.ctAddr})
          that.setData({ ctCost: res.data.data.ctCost }) 
          that.setData({ ctId: res.data.data.ctId }) 
          that.setData({ ctImg: res.data.data.ctImg })
          that.setData({ ctPart: res.data.data.ctPart })
          that.setData({ ctReport: res.data.data.ctReport })
          that.setData({ ctTime: res.data.data.ctTime })
          that.setData({ reportTime: res.data.data.reportTime })
          that.setData({ userId: res.data.data.userId }) 
        }else if(res.data.code==500500){
          that.setData({ msg: res.data.msg }) 
        }

        
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
