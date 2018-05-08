/**
 * 获取本周、本季度、本月、上月的开端日期、停止日期
 */
var now = new Date() // 当前日期
var nowDayOfWeek = now.getDay() // 今天本周的第几天
var nowDay = now.getDate() // 当前日
var nowMonth = now.getMonth() // 当前月
var nowYear = now.getFullYear() // 当前年

var lastMonthDate = new Date() // 上月日期
lastMonthDate.setDate(1)
lastMonthDate.setMonth(lastMonthDate.getMonth() - 1)
var lastYear = lastMonthDate.getFullYear()
var lastMonth = lastMonthDate.getMonth()


// 格局化日期：yyyy-MM-dd
exports.formatDate = function (date) {
  var myyear = date.getFullYear()
  var mymonth = date.getMonth() + 1
  var myweekday = date.getDate()
  if (mymonth === 12) {
    myyear = myyear - 1
  }
  if (mymonth < 10) {
    mymonth = '0' + mymonth
  }
  if (myweekday < 10) {
    myweekday = '0' + myweekday
  }
  return (myyear + '-' + mymonth + '-' + myweekday)
}

// 获得某月的天数(注:从0开始)
exports.getMonthDays = function getMonthDays (myMonth) {
  var monthStartDate = new Date(nowYear, myMonth, 1)
  console.log(monthStartDate)
  var monthEndDate = new Date(nowYear, myMonth + 1, 1)
  console.log(monthEndDate)
  var days = (monthEndDate - monthStartDate) / (1000 * 60 * 60 * 24)
  return days
}

// 获得本季度的开端月份
exports.getQuarterStartMonth = function getQuarterStartMonth () {
  var quarterStartMonth = 0
  if (nowMonth < 3) {
    quarterStartMonth = 0
  }
  if (nowMonth > 2 && nowMonth < 6) {
    quarterStartMonth = 3
  }
  if (nowMonth > 5 && nowMonth < 9) {
    quarterStartMonth = 6
  }
  if (nowMonth > 8) {
    quarterStartMonth = 9
  }
  return quarterStartMonth
}

// 获得本周的开端日期
exports.getWeekStartDate = function getWeekStartDate () {
  var weekStartDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek)
  return formatDate(weekStartDate)
}

// 获得本周的停止日期
exports.getWeekEndDate = function getWeekEndDate () {
  var weekEndDate = new Date(nowYear, nowMonth, nowDay + (6 - nowDayOfWeek))
  return formatDate(weekEndDate)
}

// 获得本月的开端日期
exports.getMonthStartDate = function getMonthStartDate () {
  var monthStartDate = new Date(nowYear, nowMonth, 1)
  return formatDate(monthStartDate)
}

// 获得本月的停止日期
exports.getMonthEndDate = function getMonthEndDate () {
  var monthEndDate = new Date(nowYear, nowMonth, getMonthDays(nowMonth))
  return formatDate(monthEndDate)
}

// 获得上月开端时候
exports.getLastMonthStartDate = function getLastMonthStartDate () {
  var lastMonthStartDate = new Date(nowYear, lastMonth, 1)
  return formatDate(lastMonthStartDate)
}

// 获得上月停止时候
exports.getLastMonthEndDate =  function getLastMonthEndDate () {
  var lastMonthEndDate = new Date(nowYear, lastMonth, getMonthDays(lastMonth))
  return formatDate(lastMonthEndDate)
}

// 获得本季度的开端日期
exports.getQuarterStartDate = function getQuarterStartDate () {
  var quarterStartDate = new Date(nowYear, getQuarterStartMonth(), 1)
  return formatDate(quarterStartDate)
}

// 获得本季度的停止日期
exports.getQuarterEndDate = function getQuarterEndDate () {
  var quarterEndMonth = getQuarterStartMonth() + 2
  var quarterStartDate = new Date(nowYear, quarterEndMonth, getMonthDays(quarterEndMonth))
  return formatDate(quarterStartDate)
}