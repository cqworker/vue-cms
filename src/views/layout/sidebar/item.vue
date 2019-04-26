<script>
  //  这是侧边栏的每个小格子对应的组件 动态的把图标什么的神仙元素加上
  export default {
    name: 'menuItem',
    functional: true,
    props: {
      icon: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      }
    },
    render(h, context) {
      const { icon, title } = context.props
      const vnodes = []
      if(icon) {
        vnodes.push(<i class={'el-icon-' + icon}></i>)
      }
      if(title) {
        vnodes.push(<span slot="title">{(title)}</span>)
      }
      return vnodes
    }
  }
</script>
