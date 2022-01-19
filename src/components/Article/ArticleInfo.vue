<template>
  <div>
    <van-cell>
      <!-- 标题区域的插槽 -->
      <template #title>
        <div class="title-box">
          <!-- 标题 -->
          <span>{{title}}</span>
          <!-- 单张图片 -->
          <img v-if="cover.type === 1" :src="cover.images[0]" alt="" class="thumb">
        </div>
        <!-- 三张图片 -->
        <div v-if="cover.type === 3" class="thumb-box">
          <img class="thumb" :src="cover.images[0]">
          <img class="thumb" :src="cover.images[1]">
          <img class="thumb" :src="cover.images[2]">
        </div>
      </template>
      <!-- label 区域的插槽 -->
      <template #label>
        <div class="label-box">
          <span>{{author}} &nbsp;&nbsp; {{cmtCount}}评论 &nbsp;&nbsp;  发布日期 {{time}}</span>
          <!-- 关闭按钮 -->
          <van-icon name="cross" />
        </div>
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {
  name: 'ArticleInfo',
  props: {
    // 文章标题
    title: {
      type: String,
      default: ''
    },
    // 作者名字
    author: {
      type: String,
      default: ''
    },
    // 评论数
    cmtCount: {
      type: [Number, String],
      default: 0
    },
    // 发布日期
    time: {
      type: [Number, String],
      default: 0
    },
    cover: {
      type: Object,
      default() {
        return {
          type: 0
        }
      }
    },
    id: {
      required: true,
      type: Number
    }
  }
}
</script>

<style lang="scss" scoped>
  .label-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .thumb {
    // 矩形黄金比例：0.618
    width: 113px;
    height: 70px;
    background-color: #f8f8f8;
    object-fit: cover;
  }

  .title-box {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .thumb-box {
    display: flex;
    justify-content: space-between;
  }
</style>
