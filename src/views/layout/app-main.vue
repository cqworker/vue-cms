<template>
  <div class="main-app">
    <!--这些组件都是什么神仙意思啊-->
    <keep-alive>
      <!--这个组件里面可以动态的修改rout的view页面的名称-->
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  // 定义了一个神仙组件啦
  export default {
    name: 'app-main',
    data() {
      return {
        a: '右侧主界面'
      }
    }
  }
</script>

<style scoped lang="stylus">
  .main-app
    padding 5px
</style>
