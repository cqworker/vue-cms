<template>
  <div class="homepage-container">
    <!--近七日停诊险领取量-->
    <div class="home-total">
      <div class="home-total-item" v-for="(item, index) of hospitalData">
        <div class="wrapper-item">
          <p class="title">签约医院数量</p>
          <p class="value" ref="countup">{{item.value}}</p>
        </div>
      </div>
      <div class="home-total-item" v-for="(item, index) of companyData">
        <div class="wrapper-item">
          <p class="title">已对接保险公司数量</p>
          <p class="value" ref="countup">{{item.value}}</p>
        </div>
      </div>
    </div>

    <el-row class="home-part1" :gutter="0">
      <el-col :span="12">
        <div class="near-six-month">
          <div class="title">
            <p class="title-value">平台近6月的保单交易</p>
          </div>
          <div class="content" ref="near-six-month-chart">
            <near-six-month width="100%" height="100%"></near-six-month>
          </div>
        </div>
      </el-col>
      <el-col :span="8" class="detail-item-wrapper">
        <div class="home-detail-item" :style="{ background: item.color}" v-for="(item, index) of userDate">
          <div class="name">{{item.name}}</div>
          <div class="value">
            <span class="num">{{(item.value / 10000).toFixed(2)}}</span>万
          </div>
        </div>
      </el-col>
    </el-row>

  </div>
</template>
<script>
  import ColorLine from '@/components/color-line'
  import NearSixMonth from '@/views/homepage/near-six-month'
  import { getHospitalCount, getCompanyDate } from '@/api/h5'

  export default {
    components: {
      ColorLine,
      NearSixMonth
    },
    data() {
      return {
        hospitalData: [
          {
            value: '101'
          }
        ],
        companyData: [
          {
            value: '18'
          }
        ],
        userDate: [
          {
            name: '注册用户数',
            value: '100000',
            color: '#8499b6'
          },
          {
            name: '活跃用户数',
            value: '30000',
            color: '#6976a2'
          }
        ],
        insuranceDate: [
          {
            name: '停诊险领取量',
            value: '100',
            color: '#8499b6'
          },
          {
            name: '产妇意外领取情况',
            value: '80',
            color: '#6976a2'
          }
        ],
        numAnim: null
      }
    },
    methods: {
    },
    created() {
      getHospitalCount().then(resp => {
        this.hospitalData = resp.data
      }).catch(() => {
        console.log('getHospital出现异常')
      })
      getCompanyDate().then(resp => {
        this.companyData = resp.data
      }).catch(function (error) {
        console.log(error)
      })
//      getUserDate().then(resp => {
//        this.rankList = resp.data
//        this._initScroll()
//      }).catch(() => {
//        console.log('获取rankList出现异常')
//      })
    },
    mounted() {}
  }
</script>
<style scoped lang="stylus">
  .home-total {
    width: 100%;
    min-width: 800px;
    height: 150px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin: 0 0 15px 0;
    .home-total-item {
      box-sizing: border-box;
      display: inline-block;
      width: 25%;
      height: 100%;
      padding: 15px 0;
      vertical-align: top;
      .wrapper-item {
        height: 100%;
        padding: 0 20px;
        border-right: 1px solid #ccc;
        text-align: center;
        .title {
          margin: 0px 0;
        }
        .value {
          margin: 5px 0;
          font-size: 26px;
        }
      }
      &:last-child {
        .wrapper-item {
          border: none;
        }
      }
    }
  }

  .home-part1 {
    margin: 0 !important;
    .near-six-month {
      border: 1px solid #eee;
      height: 300px;
      .title {
        background: #dde3ef;
        padding: 10px 0;
        .title-value {
          margin-left: 4px;
          text-indent: 4px;
          color: #666;
          &:before {
            display: inline-block;
            content: '';
            width: 4px;
            height: 16px;
            background: purple;
            margin-right: 4px;
            border-radius: 4px;
            vertical-align: middle;
          }
        }
      }
      .content {
        width: 100%;
        height: 260px;
      }
    }
    .detail-item-wrapper {
      display: flex;
      height: 300px;
      overflow: hidden;
      flex-wrap: wrap;
      flex-flow: row wrap;
      justify-content: space-around;
      align-content: space-around;
      padding: 0 10px;
      color: #fff;
      .home-detail-item {
        flex: 0 0 48%;
      // display: inline-block;
      // width: 150px;
        height: 145px;
        border: 1px solid #eee;
      }
      .home-detail-item:nth-child(3), .home-detail-item:nth-child(4) {
        margin-top: 10px;
      }
      .home-detail-item {
        .name {
          padding: 30px 0 10px 0;
          text-align: center;
          font-size: 20px;
        }
        .value {
          text-align: center;
          .num {
            font-size: 28px;
          }
        }
      }
    }
    .rank {
      .title {
        background: #dde3ef;
        padding: 10px 0;
        .title-value {
          margin-left: 4px;
          text-indent: 4px;
          color: #666;
          &:before {
            display: inline-block;
            content: '';
            width: 4px;
            height: 16px;
            background: purple;
            margin-right: 4px;
            border-radius: 4px;
            vertical-align: middle;
          }
        }
      }
      .content {
        position: relative;
        width: 100%;
        height: 260px;
        overflow: hidden;
        .wrapper-user {
          margin: 0;
          list-style: none;
          padding-left: 0;
          .user-item {
            height: 50px;
            padding: 5px;
            .avatar {
              border: 1px solid #888;
              border-radius: 100px;
              vertical-align: bottom;
            }
            .user-info {
              display: inline-block;
              padding-left: 5px;
              .name {
                color: #999;
                font-size: 14px;
              }
              .value {
                color: red;
              }
            }
          }
        }
      }
    }
  }

  .home-part2 {
    margin-top: 15px;
    .financing-sprinkled {
      border: 1px solid #eee;
      height: 350px;
      .title {
        background: #dde3ef;
        padding: 10px 0;
        .title-value {
          margin-left: 4px;
          text-indent: 4px;
          color: #666;
          &:before {
            display: inline-block;
            content: '';
            width: 4px;
            height: 16px;
            background: purple;
            margin-right: 4px;
            border-radius: 4px;
            vertical-align: middle;
          }
        }
      }
      .content {
        display: inline-flex;
        width: 100%;
        height: 310px;
        .investment {
          height: 310px;
          width: 50%;
          .title {
            display: inherit;
            text-align: center;
            background: transparent;
            padding-top: 20px;
          }
          .detail {
            margin-left: 10px;
            text-align: center;
            .detail-item {
              display: inline-block;
              width: 40%;
              margin: 5px;
              padding-left: 5px;
              border-left: 5px solid #ccc;
              color: #666;
            }
          }
        }
        .financing {
          height: 310px;
          width: 50%;
          .title {
            display: inherit;
            text-align: center;
            background: transparent;
            padding-top: 20px;
          }
          .detail {
            margin-left: 10px;
            text-align: center;
            .detail-item {
              display: inline-block;
              width: 40%;
              margin: 5px;
              padding-left: 5px;
              border-left: 5px solid #ccc;
              color: #666;
            }
          }
        }
      }
    }
    .bad-debt {
      height: 350px;
      min-width: 540px;
      margin-left: 10px;
      border: 1px solid #eee;

      .title {
        background: #dde3ef;
        padding: 10px 0;
        .title-value {
          margin-left: 4px;
          text-indent: 4px;
          color: #666;
          &:before {
            display: inline-block;
            content: '';
            width: 4px;
            height: 16px;
            background: purple;
            margin-right: 4px;
            border-radius: 4px;
            vertical-align: middle;
          }
        }
      }
      .content {
        height: inherit;
        .bad {
          height: 50%;
          padding: 20px 30px;
          .total {
            display: inline-block;
            width: 200px;
            color: #666;
            vertical-align: top;
            .total1 {
              text-align: center;
              .num {
                font-size: 24px;
              }
            }
            .total2 {
              text-align: center;
              margin-top: 20px;
              .num {
                font-size: 24px;
              }
            }
          }
          .chart {
            display: inline-block;
            margin-left: 15px;
            .title {
              background: none;
              border-bottom: 1px solid #ccc;
            }
            .line {
              border-bottom: 1px solid #ccc;
              padding-bottom: 30px;
              &:last-child {
                border-bottom-color: #000;
              }
            }
            &:after {
              content: '0';
              position: relative;
              font-size: 70px;
              left: 20px;
              top: -70px;
              color: #ddd;
            }
          }
        }
        .overdue {
          padding: 10px 30px;
          height: 50%;
          .total {
            display: inline-block;
            width: 200px;
            color: #666;
            vertical-align: top;
            .total1 {
              text-align: center;
              .num {
                font-size: 24px;
              }
            }
            .total2 {
              text-align: center;
              margin-top: 20px;
              .num {
                font-size: 24px;
              }
            }
          }
          .chart {
            display: inline-block;
            margin-left: 15px;
            .title {
              background: none;
              border-bottom: 1px solid #ccc;
            }
            .line {
              border-bottom: 1px solid #ccc;
              padding-bottom: 30px;
              &:last-child {
                border-bottom-color: #000;
              }
            }
            &:after {
              content: '0';
              position: relative;
              font-size: 70px;
              left: 20px;
              top: -70px;
              color: #ddd;
            }
          }
        }
      }
    }
  }

  .el-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
