<template>
  <div>
    <van-popup v-model:show="show2" position="left" :style="{ width: '100%' ,height:'100%'}">
      <Reading></Reading>
    </van-popup>
    <van-popup v-model:show="show" position="right" :style="{ width: '100%' ,height:'100%'}">
      <catalogue :hidden="showPopup"></catalogue>
    </van-popup>
    <div
      class="all"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      <van-nav-bar
        :style="{
      background:showBookTil?`rgb(194, 30, 30 ,${touchUp/80} )`:'transparent',
      }"
        @click-left="back"
        title="标题"
        left-text="返回"
        left-arrow
      >
        <template #right>
          <van-icon name="ellipsis" size="18" color="#fff" />
        </template>
        <template #title>
          <div
            :class="['slot-title',
          showBookTil?'slot-title_anima':''
         ]"
            :style="{
          opacity:showBookTil?1:0,
      
        }"
          >
            <img :src="detailData.icon" alt />
            <div class="slot-text">
              <p>{{detailData.name}}</p>
              <span>{{detailData.classify}}</span>
            </div>
          </div>
        </template>
        <template #left>
          <van-icon name="arrow-left" color="#fff" size="18" />
        </template>
      </van-nav-bar>
      <header>
        <div class="header_top">
          <img class="header_book" :src="detailData.icon" alt />
          <div class="header_meg">
            <p>{{detailData.name}}</p>
            <p>
              {{detailData.author}}
              <van-icon size="10" color="#888" name="arrow" />
            </p>
            <span>{{detailData.classify}}</span>
          </div>
        </div>
        <div class="header_bottom">
          <div class="out">
            出圈指数
            <span>TM</span>
          </div>
          <div class="out_num">
            Lv{{detailData.Lv}} {{}}
            <strong>{{detailData.outNumber}}</strong>
            <van-icon size="10" name="arrow" />
          </div>
        </div>
      </header>
      <div class="detail">
        <div class="detail_month">
          <div class="first">
            <p>三千月票</p>
            <span>
              16里程碑
              <van-icon name="arrow" color="#888" size="12" />
            </span>
          </div>
          <div class="second">
            <p>
              {{detailData.wordNum.slice(0,-1)}}
              <span>{{detailData.wordNum.slice(-1)}}字</span>
            </p>
            <span>完本</span>
          </div>
          <div class="three">
            <p>{{detailData.monthBill}}</p>
            <span>
              月票
              <van-icon name="arrow" color="#888" size="12" />
            </span>
          </div>
        </div>
        <div class="classify">
          <div class="hidden">
            <li v-for="(item) in detailData.classify2.split(',')" :key="item">{{item}}</li>
          </div>
        </div>
        <div class="text-wrapper" v-html="detailData.brief"></div>
        <div class="word" @click="showPopup(true)">
          <p>目录</p>
          <div class="word-num" ref="wordRef">
            {{detailData.wordChapter}}章{{detailData.status == 0 ? "完本" :"连载"}}
            <van-icon name="arrow" color="#666" size="14" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref,Ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
// import { routerGo, routerPush } from "../../mixin/index";
import catalogue from "../../components/catalogue/index.vue";
import Reading from "../../components/reading/index.vue";
export default defineComponent({
  name: "detail",
  components: {
    catalogue,
    Reading
  },
  setup(props) {
    const wordRef = ref(null)
    const detailDatas = [
      {
        icon: "https://bookcover.yuewen.com/qdbimg/349573/1026521910/150",
        name: "李佑的大唐",
        author: "西关钛金",
        classify: "历史 · 两晋隋唐",
        outNumber: "1539",
        wordNum: "202万",
        wordChapter: 807,
        monthBill: 0,
        Lv: "1初出茅庐",
        status: "0",
        classify2: "唐朝,贞观,隋唐,穿越,扮猪吃虎,轻松,王侯,皇子",
        brief: `（新书《大明次子》上传！）\n
            一枚神秘的戒指将现代青年李佑带到了贞观十七年的大唐，成为了被李世民叫做混蛋的儿子齐王李佑。\n
            这一年是李世民最痛苦的一年，看着自己事业的接班人懦弱的李治，心里满是苦笑和无奈。\n
            “咦...！”现代青年李佑嘴角微微翘起：“我的这枚戒指可以带我穿梭未来和现代，玻璃，老花眼镜，巧克力，面膜，香水...可爱的大唐，我要发财了。”\n
            “哦...这戒指还有系统，哎呦...神臂弓，步人甲，自行车...！”\n
            李佑开始疯狂的积攒自己的实力，可是古人的智慧也不低，就在李佑积攒实力的时候，贞观二十三年五月己巳日...已经病入膏肓的李世民在含风殿中下了最后一道圣旨：“赐李佑鸩酒一杯！”\n
            只是圣旨并没有被传出，李佑走到李世民的床前，微微躬身道：“父皇这里已经不是你的大唐了，而是李佑的大唐！”`
      }
    ];
    let route = useRoute();
    let router = useRouter();
    const id: number = Number(route.query.bookId);
    const detailData = detailDatas[id - 1];
    const touchUp = ref(0); //touch 向上距离
    console.log(detailData);
    let start = 0;
    let startTouchPosi = 0;
    const handleTouchStart = e => {
      console.log(e);
      startTouchPosi = touchUp.value;
      start = e.targetTouches[0].pageY;
    };
    const showBookTil = ref(false);
    const handleTouchMove = e => {
      console.log(e.changedTouches[0].pageY, start);
      touchUp.value = startTouchPosi + start - e.changedTouches[0].pageY;
      console.log(touchUp.value);

      //  touchUp.value =   +e.changedTouches[0].pageY - +start
      if (touchUp.value + start - e.changedTouches[0].pageY > 30) {
        showBookTil.value = true;
      } else {
        showBookTil.value = false;
      }
    };
    const handleTouchEnd = e => {
      if (start - e.changedTouches[0].pageY < -touchUp.value) {
        touchUp.value = 0;
        return;
      }
      touchUp.value = start - e.changedTouches[0].pageY;
    };
    let store = useStore();
    const back = () => {
      store.dispatch("changePageIndex", 1);
      store.dispatch("changeFadeWay", "fadeLeave");
      router.go(-1);
    };
    const show:Ref<boolean> = ref(false);
    const show2 = ref(false);
    const showPopup = (data: boolean, look?: string) => {
      console.log(12, data);
      if (look) {
        show2.value = true;
      }
      show.value =  data;
    };
    return {
      back,
      detailData,
      handleTouchStart,
      handleTouchMove,
      handleTouchEnd,
      showBookTil,
      show,
      touchUp,
      show2,
      showPopup
    };
  }
});
</script>

<style scoped>
.van-nav-bar {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: transparent;
}
.all {
  position: fixed;
  background: #fff;
  height: 100%;
  z-index: 10;
  overflow-y: auto;
  width: 100%;
}
.van-nav-bar__content {
  position: absolute;
  width: 100%;
}
header {
  background: rgb(182, 46, 46);

  color: #fff;
  background-repeat: no-repeat;
  padding: 0 4vw;
  padding-top: 60px;
  padding-bottom: 35px;
}
.header_top {
  display: flex;
  align-items: center;
}
.all .van-nav-bar__title {
  margin-left: 30px;
}
header span {
  font-size: 12px;
  opacity: 0.8;
}
header p:nth-child(1) {
  font-size: 18px;
}
header p:nth-child(2) {
  margin: 0.5vw 0;
}
.header_book {
  width: 20vw;
  object-fit: contain;
  border-radius: 0.8vw;
  margin-right: 3vw;
}
.header_bottom {
  background: rgba(0, 0, 0, 0.561);
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 3vw;
}
.header_bottom strong {
  font-size: 20px;
}
.header_bottom .out {
  display: flex;
}
.header_bottom .out span {
  transform: scale(0.7);
  display: block;
}
.detail {
  margin-top: -20px;
  background-color: #fff;
  width: 100%;
  border-radius: 30px;
}
.detail_month {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 5vw;
}
.all .slot-title_anima {
  margin-top: 0;
}
.detail_month .first,
.second,
.three {
  display: flex;
  flex-direction: column;
}
.first,
.second,
.three span {
  font-size: 12px;
  margin-top: 8px;
}
.first span {
  font-size: 12px;
}
.second span {
  font-size: 12px;
  font-weight: 400;
}
.first,
.second,
.three p span {
  font-size: 16px;
}
.second,
.three p {
  font-size: 20px;
  font-weight: 600;
}
.second p span {
  font-size: 16px;
  font-weight: 400;
}
.classify {
  overflow: hidden;
  height: 60px;
}
.classify li {
  list-style: none;
  margin-left: 3vw;
  padding: 6px 12px;
  border-radius: 16px;
  white-space: nowrap;
  background: rgba(199, 199, 199, 0.288);
  color: rgb(122, 122, 122);
}
.hidden li:nth-last-child(1) {
  margin-right: 20px;
}
.classify .hidden {
  display: flex;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
  flex-wrap: nowrap;
  height: 70px;
  padding: 0.3vw;
}
.text-wrapper {
  white-space: pre-wrap;
  padding: 4vw 5vw;
  font-size: 14px;
  /* letter-spacing: 1.1; */
}
.word {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  padding: 10px 5vw;
}
.word-num {
  color: #666;
  font-size: 14px;
}
.slot-title {
  display: flex;
  align-items: center;
  color: #fff;
  transform: scale(0.7);
  margin-top: 30px;
  transition: margin 0.2s;
}
.slot-title img {
  height: 40px;
  margin-right: 10px;
}
.slot-text span {
  font-size: 12px;

  opacity: 0.8;
}
</style>
