//list.js
//获取应用实例
const app = getApp()

Page({
  data: {
    createDate: "2019-06-03 10:40:27",
    departmentId: 1,
    doctorId: 1,
    general:"没病",

    medicalrecordContentFinally: "最终诊断高血压",
    medicalrecordContentFirst: '应该没什么病',
    medicalrecordId:1,
    symptom: "日常摸鱼",
    treatment: "没病 治啥",
    userId:1,
    jianchalist: [{
      examinationOrderId
        :
        1,
examinationType
        :
        "exsanguinate"}],
    
    yiyuan: '../../image/yiyuan.png',
    canIUse: wx.canIUse('button.open-type.getUserInfo')
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
      url: 'http://47.100.35.6:8080/medicalRecord', // 仅为示例，并非真实的接口地址
      data: {
        medicalRecordId: option.medicalRecordId
        
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)

        that.setData({ jianchalist: res.data.data.examinationOrder })
        that.setData({ createDate: res.data.data.medicalrecord.createDate })
        that.setData({ doctorId: res.data.data.medicalrecord.doctorId })
        that.setData({ general: res.data.data.medicalrecord.general })
        that.setData({ medicalrecordContentFinally: res.data.data.medicalrecord.medicalrecordContentFinally })
        that.setData({ medicalrecordContentFirst: res.data.data.medicalrecord.medicalrecordContentFirst })
        that.setData({ medicalrecordId: res.data.data.medicalrecord.medicalrecordId })
        that.setData({ symptom: res.data.data.medicalrecord.symptom })
        //that.setData({ treatment: res.data.data.medicalrecord.treatment })
        that.setData({ userId: res.data.data.medicalrecord.userId })
        
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
