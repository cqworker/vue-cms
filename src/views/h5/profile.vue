<template>
  <div class="profile-wrapper">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="医院名">
        <el-input v-model="formInline.name" placeholder="名称"></el-input>
      </el-form-item>
      <el-form-item label="医院区域">
        <el-select v-model="formInline.region" placeholder="区域">
          <el-option label="北京" value="shanghai"></el-option>
          <el-option label="深圳" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onsubmit">查询</el-button>
        <el-button type="primary" @click="add">新增</el-button>
      </el-form-item>
    </el-form>


    <div v-for="item in hospitals">
      <el-col :span="7">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="avatar" class="image">
          <div style="padding: 14px;">
            <span>{{item.num}}</span>
            <span>{{item.region}}</span>
            <span>{{item.name}}</span>
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
            num: '1',
            region: '自贡',
            qrcode: '',
            createDate: ''
          },
          {
            name: '中山医院',
            num: '2',
            region: '广州',
            qrcode: '',
            createDate: ''
          },
          {
            name: '南山医院',
            num: '3',
            region: '深圳',
            qrcode: '',
            createDate: ''
          },
          {
            name: '中心医院',
            num: '4',
            region: '北京',
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
      onsubmit: function(event) {
        alert('Hello ' + this.name + '!')
      }
    }
  }
</script>
