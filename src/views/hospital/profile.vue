<template>
  <div class="profile-wrapper">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="医院名">
        <el-input v-model="formInline.name" placeholder="名称"></el-input>
      </el-form-item>
      <el-form-item label="医院区域">
        <el-input v-model="formInline.region" placeholder="区域"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="search">查询</el-button>
        <el-button type="primary" @click="add">新增</el-button>
      </el-form-item>
    </el-form>


    <div v-for="item in hospitals">
      <el-col :span="7">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="avatar" v-on:click="showqrcode" ref="{{item.sysId}}" class="image">
          <div style="padding: 14px;">
            <span>{{item.num}}</span>
            <span>{{item.region}}</span>
            <span>{{item.sysId}}</span>
            <span>{{item.qrcode}}</span>
            <div class="bottom clearfix">
              <time class="time">{{ createDate }}</time>
              <br/>
              <el-button type="text" v-on:click="edit" class="button">编辑</el-button>
              <el-button type="text" v-on:click="del" class="button">删除</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import { getHospitalList, getHospitalqrcode } from '@/api/h5'
  export default {
    data() {
      return {
        formInline: {
          name: '',
          region: ''
        },
        hospitals: [
          {
            name: '自贡三院',
            sysId: '1',
            region: '自贡',
            qrcode: '',
            createDate: ''
          },
          {
            name: '自贡三院',
            sysId: '2',
            region: '自贡',
            qrcode: '',
            createDate: ''
          }
        ]
      }
    },
    // get/set 理解成读取配置文件中的属性注入this vue实例
    computed: {
      ...mapGetters([
        'name',
        'avatar'
      ])
    },
    created() {
      // 查询所有医院的接口,在页面平铺显示
      this.createDate = new Date()
    },
    methods: {
      edit: function (event) {
        // `this` 在方法里指向当前 Vue 实例
        alert('Hello ' + this.name + '!')
        // `event` 是原生 DOM 事件
        if (event) {
          alert(event.target.tagName)
        }
      },
      del: function (event) {
        alert('Hello ' + this.name + '!')
      },
      add: function (event) {
        alert('Hello ' + this.name + '!')
      },
      search: function (event) {
        getHospitalList(this.formInline).then(resp => {
          this.hospitals = resp.retData
        }).catch(function (error) {
          console.log(error)
        })
      },
      showqrcode: function (event) {
        getHospitalqrcode(this.$refs.sysId).then(resp => {
//          event.target.src = resp.retData.qrcode
          event.target.src = 'https://oss.aliyuncs.com/aliyun_id_photo_bucket/account-console-aliyun-com/wwwccc_6915537645101733948.jpeg'
        })
      }
    }
  }
</script>
