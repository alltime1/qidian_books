<template>
  <div>
    <van-nav-bar title="标题" left-text="返回" left-arrow @click-left="back">
      <template #left>
        <van-icon name="arrow-left" color="#000" />
      </template>
      <template #title>
        <van-tabs v-model:active="active">
          <van-tab title="目录"></van-tab>
          <van-tab title="热门"></van-tab>
          <van-tab title="足迹"></van-tab>
          <van-tab title="书签"></van-tab>
        </van-tabs>
      </template>
      <template #right>
        <van-icon style="transform:rotate(90deg)" name="exchange" color="#000" />
      </template>
    </van-nav-bar>
    <div class="content">
      <van-sticky>
        <p class="content_top">正文卷</p>
      </van-sticky>
      <ul>
        <li @click="look(index)" v-for="(item,index) in catalogueList" :key="index">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default defineComponent({
  props: {
    hidden: {
      type: Function,
      default: () => {}
    }
  },
  setup(props) {
    console.log(props.hidden);
    const List:Array<string> = [];
    let randomData:number = 200 * +Math.random().toFixed(2);
    for (let i = 1; i < +randomData; i++) {
      List.push(`第${i}章`);
    }

    let catalogueList = List;
    let store = useStore();
    let router = useRouter();
    const active = ref(0);
    const back = () => {
      // store.dispatch("changePageIndex", 1);
      // store.dispatch("changeFadeWay", "fadeLeave");
      // router.go(-1);
      props.hidden(false);
    };
    const look = i => {
      props.hidden(false, i + 1 + "");
    };
    return {
      back,
      catalogueList,
      active,
      look
    };
  }
});
</script>

<style  scoped>
.content {
  position: relative;
}
.content .content_top {
  background: rgba(248, 248, 248, 0.863);
  color: rgb(126, 126, 126);
  padding: 5px 20px;
}
.content ul {
  margin-top: 4px;
  padding: 10px 4vw;
}
.content ul li {
  margin: 10px 0;
}
</style>
