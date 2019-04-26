<template>
  <div></div>
</template>
<script>
  import { debounce } from '@/utils'
  import { insuranceDate } from '@/api/h5'
  let echarts = require('echarts/lib/echarts')
  require('echarts/lib/chart/line')
  require('echarts/lib/component/tooltip')
  export default {
    name: 'near-six-month',
    props: {
      width: {
        type: String,
        default: ''
      },
      height: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        optionData: [],
        legendData: ['停诊险', '百万医疗个人', '百万医疗家庭', '太保产妇意外', '重疾险'],
        xAxisData: this.getNearSixMonth(),
        yData: [
          {
            name: '停诊险领取量',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '百万全家桶个人保单量',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '百万全家桶全家保单量',
            type: 'line',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          },
          {
            name: '产妇意外保单量',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '重疾险保单量',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
          }
        ]
      }
    },
    methods: {
      getNearSixMonth() {
        let value = []
        let currentMonth = 0
        if (new Date().getMonth() >= 6) {
          currentMonth = new Date().getMonth()
          for (let i = 0; i < 6; i++) {
            value.push(new Date().getFullYear() + '-' + (currentMonth + i - 5))
          }
        } else {
          currentMonth = new Date().getMonth()
          for (let i = 0; i < 6; i++) {
            if ((currentMonth + i - 5) < 1) {
              value.push((new Date().getFullYear() - 1) + '-' + (currentMonth + i + 7))
            } else {
              value.push(new Date().getFullYear() + '-' + (currentMonth + i - 5))
            }
          }
        }
        console.log(value)
        return value
      },
      initChart() {
        this.charts = echarts.init(this.$el)
        this.charts.setOption({
          tooltip: {
            trigger: 'axis'
          },
          grid: {
            left: '50px',
            right: '10px',
            bottom: '30px',
            top: '10px'
          },
          legend: {
            data: ['停诊险', '百万医疗个人', '百万医疗家庭', '太保产妇意外', '重疾险']
          },
          xAxis: {
            type: 'category',
            boundaryGap: true,
            data: this.xAxisData
          },
          yAxis: {
            type: 'value'
          },
          series: this.yData
        })
      }
    },
    mounted() {
      insuranceDate().then(resp => {
//        this.yData = resp.data
      }).catch(() => {
        console.log('insuranceDate出现异常')
      })
      this.$el.style.width = this.width
      this.$el.style.height = this.height
      this.initChart()
      this.__resizeHanlder = debounce(() => {
        if (this.charts) {
          this.charts.resize()
        }
      }, 100)
      window.addEventListener('resize', this.__resizeHanlder)
    }
  }
</script>
