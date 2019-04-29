<template>
  <div class="profile-wrapper">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="姓名">
        <el-input v-model="formInline.name" placeholder="名称"></el-input>
      </el-form-item>
      <el-form-item label="领取时间">
        <el-select v-model="formInline.region" placeholder="领取时间">
          <el-option label="北京" value="shanghai"></el-option>
          <el-option label="深圳" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="就诊时间">
        <el-select v-model="formInline.region" placeholder="就诊时间">
          <el-option label="北京" value="shanghai"></el-option>
          <el-option label="深圳" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onsubmit">查询</el-button>
        <el-button type="primary" @click="add">新增</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="tableData"
      style="width: 100%"
      max-height="600">
      <el-table-column
        fixed
        prop="date"
        label="日期"
        width="150">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="product"
        label="保险产品"
        width="120">
      </el-table-column>
      <el-table-column
        prop="status"
        label="保单状态"
        width="120">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="联系电话"
        width="300">
      </el-table-column>
      <el-table-column
        prop="premium"
        label="挂号费(元)"
        width="120">
      </el-table-column>
      <el-table-column
        prop="nickname"
        label="微信昵称"
        width="120">
      </el-table-column>
      <el-table-column
        prop="openid"
        label="openid"
        width="120">
      </el-table-column>
      <el-table-column
        prop="unionid"
        label="unionid"
        width="120">
      </el-table-column>

      <el-table-column
        fixed="right"
        label="操作"
        width="120">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="detailRow(scope.$index, tableData)"
            type="text"
            size="small">
            查看详情
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    methods: {
      detailRow(index, rows) {
        alert('Hello ' + rows + '!')
      }
    },
    data() {
      return {
        formInline: {
          name: '',
          region: ''
        },
        tableData: [{
          sysid: '123344asd',
          date: '2016-05-03',
          name: '王某',
          product: '百万医疗',
          status: '理赔中',
          nickname: '王小虎',
          openid: '112',
          unionid: '123',
          phone: '123456789101',
          premium: '100'
        }, {
          sysid: '123344asd',
          date: '2016-05-03',
          name: '被保人',
          product: '百万医疗',
          status: '理赔中',
          nickname: '王小虎',
          openid: '112',
          unionid: '123',
          phone: '123456789101',
          premium: '100'
        }, {
          sysid: '123344asd',
          date: '2016-05-03',
          name: '被保人',
          product: '百万医疗',
          status: '理赔中',
          nickname: '王小虎',
          openid: '112',
          unionid: '123',
          phone: '123456789101',
          premium: '100'
        }, {
          sysid: '123344asd',
          date: '2016-05-03',
          name: '被保人',
          product: '百万医疗',
          status: '已过期',
          nickname: '王小虎',
          openid: '112',
          unionid: '123',
          phone: '123456789101',
          premium: '100'
        }, {
          sysid: '123344asd',
          date: '2016-05-03',
          name: '被保人',
          product: '百万医疗',
          status: '理赔中',
          nickname: '王小虎',
          openid: '112',
          unionid: '123',
          phone: '123456789101',
          premium: '100'
        }, {
          sysid: '123344asd',
          date: '2016-05-03',
          name: '被保人',
          product: '百万医疗',
          status: '理赔中',
          nickname: '王小虎',
          openid: '112',
          unionid: '123',
          phone: '123456789101',
          premium: '100'
        }]
      }
    }
  }
</script>
