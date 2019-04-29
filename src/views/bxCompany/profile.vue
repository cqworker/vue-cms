<template>
  <div class="profile-wrapper">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="公司名">
        <el-input v-model="formInline.name" placeholder="公司全称"></el-input>
      </el-form-item>
      <el-form-item label="联系人">
        <el-select v-model="formInline.region" placeholder="联系人">
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
      :data="company"
      style="width: 100%"
      max-height="600">
      <el-table-column
        fixed
        prop="name"
        label="公司名称"
        width="120">
      </el-table-column>
      <el-table-column
        prop="code"
        label="公司编号"
        width="120">
      </el-table-column>
      <el-table-column
        prop="linkman"
        label="联系人"
        width="120">
      </el-table-column>
      <el-table-column
        prop="link_type"
        label="联系方式"
        width="120">
      </el-table-column>
      <el-table-column
        prop="link_phone"
        label="联系方式"
        width="300">
      </el-table-column>
      <el-table-column
        prop="create_time"
        label="创建时间"
        width="120">
      </el-table-column>
      <el-table-column
        prop="edit_time"
        label="修改时间"
        width="120">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="120">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="editRow(scope.$index, company)"
            type="text"
            size="small">
            修改
          </el-button>
          <el-button
            @click.native.prevent="delRow(scope.$index, company)"
            type="text"
            size="small">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
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
        company: [
          {
            code: 'taibao',
            name: '太平洋保险',
            link_type: '微信',
            link_phone: 'cyeanjk',
            linkman: '王总',
            create_time: '',
            edit_time: ''
          },
          {
            code: 'taibao',
            name: '太平洋保险',
            link_type: '手机号',
            link_phone: '12542483748',
            linkman: '张强',
            create_time: '',
            edit_time: ''
          },
          {
            code: 'taibao',
            name: '太平洋保险',
            link_type: '微信',
            link_phone: 'cyeanjk',
            linkman: '王总',
            create_time: '',
            edit_time: ''
          },
          {
            code: 'taibao',
            name: '太平洋保险',
            link_type: '微信',
            link_phone: 'cyeanjk',
            linkman: '王总',
            create_time: '',
            edit_time: ''
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
      this.company.create_time = new Date()
      this.company.edit_time = new Date()
    },
    methods: {
      editRow: function (event) {
        // `this` 在方法里指向当前 Vue 实例
        alert('Hello ' + this.name + '!')
        // `event` 是原生 DOM 事件
        if (event) {
          alert(event.target.tagName)
        }
      },
      delRow: function (event) {
        alert('Hello ' + this.name + '!')
      },
      add: function (event) {
        alert('Hello ' + this.name + '!')
      },
      onSubmit: function(event) {
        alert('Hello ' + this.name + '!')
      }
    }
  }
</script>
