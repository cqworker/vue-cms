<template>
  <div class="profile-wrapper">
    <div v-for="item in hospitals">
      <el-col :span="8">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="avatar" class="image">
          <div style="padding: 14px;">
            <span>{{item.name}}</span>
            <span>{{item.region}}</span>
            <span>{{item.num}}</span>
            <span>{{item.qrcode}}</span>
            <div class="bottom clearfix">
              <time class="time">{{ item.createDate }}</time>
              <el-button type="text" class="button">操作按钮</el-button>
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
        hospitals: [
          {
            name: '',
            num: '',
            region: '',
            qrcode: '',
            createDate: ''
          },
          {
            name: '',
            num: '',
            region: '',
            qrcode: '',
            createDate: ''
          },
          {
            name: '',
            num: '',
            region: '',
            qrcode: '',
            createDate: ''
          },
          {
            name: '',
            num: '',
            region: '',
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
      // 查询所有医院的接口,在页面平铺显示,二维码点击后展示
      this.createDate = new Date()
    }
  }
</script>
