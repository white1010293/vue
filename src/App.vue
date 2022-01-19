<template>
  <div class="app-container">
    <!-- 路由占位符 -->
    <keep-alive include="Home">
      <router-view></router-view>
    </keep-alive>

    <!-- tabbar -->
    <van-tabbar placeholder router z-index="999" v-model="active" active-color="#ee0a24" @change="onChange">
      <van-tabbar-item replace to="/" icon="home-o">
        主页
      </van-tabbar-item>
      <van-tabbar-item replace to='/user' icon="user-o">
        我的
      </van-tabbar-item>
  </van-tabbar>
  </div>
</template>

<script>

export default {
  data() {
    return {
      name: 10,
      active: 0
    }
  },
  methods: {
    onChange(active) {
      console.log(active)
    }
  },
  mounted() {
    // console.log(this.$route)
    if (this.$route.path !== '/') {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
