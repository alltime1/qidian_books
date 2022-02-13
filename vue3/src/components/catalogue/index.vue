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
      <ul >
        <li @click="look" v-for="(item,index) in catalogueList" :key="index">
           {{item}}
        </li>
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
    const List = [
      [
        "第1章开局就要被杀",
        "第2章李佑要搏",
        "第3章冲天燕",
        "第4章麻翻三人",
        "第5章自贬庶民",
        "第6章学生跪老师",
        "第7章李佑的浪子回头",
        "第8章悯农出场",
        "第9章李世民宠子狂魔",
        "第10章远离阴弘智",
        "第11章到达长安",
        "第12章不愿被赐死",
        "第13章摆脱赐死",
        "第14章长安西市",
        "第15章再遇冲天燕",
        "第16章收留李佑",
        "第17章羊肉串大卖",
        "第18章文德之影李明达",
        "第19章树欲静风不止",
        "第20章燕家兄妹"
      ]
    ];
    let catalogueList= List[0];
    let store = useStore();
    let router = useRouter();
    const active = ref(0);
    const back = () => {
      // store.dispatch("changePageIndex", 1);
      // store.dispatch("changeFadeWay", "fadeLeave");
      // router.go(-1);
      props.hidden(false);
    };
    const look = ()=>{
       props.hidden(false,'looking');
    }
    return {
      back,catalogueList,
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
.content ul{
  margin-top: 4px; 
  padding: 10px 4vw;
}
.content ul li{
  margin: 10px 0;
}
</style>
