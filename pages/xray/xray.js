//detail.js
//获取应用实例
const app = getApp()

Page({
  data: {
    xrayAddr:" ",
    xrayCost: 100,
    xrayId: 1,
    xrayImg: 1,
    xrayPart:"腹部",
    xrayReport:"没有大问题",
    xrayTime:"2019-06-02",
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
          that.setData({ xrayAddr: res.data.data.xrayAddr})
          that.setData({ xrayCost: res.data.data.xrayCost }) 
          that.setData({ xrayId: res.data.data.xrayId }) 
          that.setData({ xrayImg: res.data.data.xrayImg })
          that.setData({ xrayPart: res.data.data.xrayPart })
          that.setData({ xrayReport: res.data.data.xrayReport })
          that.setData({ xrayTime: res.data.data.xrayTime })
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
