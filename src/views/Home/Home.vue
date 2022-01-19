<template>
  <div class="home-container">
    <van-nav-bar placeholder fixed z-index="999" class="title" title="黑马头条"/>

    <van-pull-refresh
      v-model="isLoading"
      :success-text="successText"
      @refresh="onRefresh"
    >
      <p>刷新次数: {{ count }}</p>
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        :offset="5"
        @load="onLoad"
      >
        <ArticleInfo v-for="item in artList"
        :key="item.art_id"
        :id="parseInt(item.art_id)"
        :title="item.title"
        :author="item.aut_name"
        :cmt-count="item.comm_count"
        :time="item.pubdate"
        :cover="item.cover"></ArticleInfo>
      </van-list>
    </van-pull-refresh>

  </div>
</template>

<script>
// import request from '@/utils/request.js'
import { getArticleListAPI } from '@/api/articleAPI.js'
import ArticleInfo from '@/components/Article/ArticleInfo.vue'

export default {
  name: 'Home',
  data() {
    return {
      // 页码
      page: 1,
      // 每页请求多少条数据
      limit: 10,
      artList: [],
      // 列表加载
      loading: true, // 是否加载
      finished: false, // 是否加载完成

      // 下拉刷新
      isLoading: false,
      count: 0,
      successText: '刷新成功',
      // 记录top
      top: 0
    }
  },
  methods: {
    // 封装获取列表数据的方法
    async initArticleList(isRefresh = false) {
      const { data: res } = await getArticleListAPI(this.page, this.limit)
      // 数据的插入

      if (isRefresh) {
        this.isLoading = false
        this.artList.unshift(...res)
      } else {
        this.loading = false
        this.artList.push(...res)
      }

      if (res.length === 0) {
        // 当请求回来的数组长度为0 说明数据已经请求完毕
        this.successText = '没有更多了'
        this.finished = true
      }
      console.log(res)
    },
    // 加载数据
    async onLoad() {
      this.page++

      this.initArticleList()
    },
    // 下拉刷新
    async onRefresh() {
      this.page++

      this.initArticleList(true)
    },
    // 记录当前top值
    scrollMate() {
      this.$route.meta.top = window.scrollY
      console.log(this.$route)
    }
  },
  created() {
    this.initArticleList()
  },
  components: {
    ArticleInfo
  },
  activated() {
    console.log('activated')
  }

}
</script>

<style lang="scss" scoped>

// /deep/ .van-nav-bar__content{
//   background: #007bff;
//   .van-nav-bar__title{
//     color:white;
//   }
// }
</style>
