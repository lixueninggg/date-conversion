## Instructions

> A Time format conversion methods collection

## Build Setup

``` bash
// install date-conversion
npm install date-conversion -S
```

## Use for Vue
```
// path: main.js

import date_conversion from 'date-conversion'

Vue.prototype.date_conversion = date_conversion
```

## Method names
| 方法名                |参数         |类型      |说明                                            |
| ---------------------| ----------- | ------- | ---------------------------------------------- |
| formatDate           |  new Date() |    -    |格局化日期yyyy-MM-dd                             |
| getMonthDays         |     >=0     |  Number |获得某月的天数(注:从0开始)                         |
| getQuarterStartMonth |      -      |    -    |获得本季度的开端月份                              |
| getWeekStartDate     |      -      |    -    |获得本周的开端日期                                |
| getWeekEndDate       |      -      |    -    |获得本周的停止日期                                |
| getMonthStartDate    |      -      |    -    |获得本月的开端日期                                |
| getMonthEndDate      |      -      |    -    |获得本月的停止日期                                |
| getMonthEndDate      |      -      |    -    |获得上月开端日期                                  |
| getLastMonthEndDate  |      -      |    -    |获得上月停止日期                                  |
| getQuarterStartDate  |      -      |    -    |获得本季度的开端日期                               |
| getQuarterEndDate    |      -      |    -    |获得本季度的停止日期                               |

## My Github

[![github](https://img.shields.io/badge/github-lixueninggg-green.svg)](https://github.com/lixueninggg/date-conversion)

Welcome to give me star