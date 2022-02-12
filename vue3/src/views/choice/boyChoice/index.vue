<template>
  <div class="all">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model:loading="loading"
        ref="check"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div>
          <van-swipe :autoplay="3000" lazy-render style="border-radius: 10px;">
            <van-swipe-item v-for="image in images" :key="image">
              <img style="width: 100%;
    object-fit: cover;" :src="image" />
            </van-swipe-item>
          </van-swipe>
          <div class="choose">
            <div class="choose_top">
              <div v-for="(item,index) in chooseList" :key="index">
                <img :src="item.icon" alt />
                <p>{{item.name}}</p>
              </div>
            </div>
            <van-swipe style="height: 30px;" :autoplay="3000" vertical>
              <van-swipe-item>
                <div class="swipe_content">
                  <div class="left">
                    <p>红楼</p>
                    <span>红楼,从截胡秦可卿开始</span>
                  </div>
                  <van-icon color="#fff" name="arrow" />
                </div>
              </van-swipe-item>
              <van-swipe-item>
                <div class="swipe_content">
                  <div class="left">
                    <p>红楼</p>
                    <span>红楼,从截胡秦可卿开始</span>
                  </div>
                  <van-icon color="#fff" name="arrow" />
                </div>
              </van-swipe-item>
              <template #indicator="{ active, total }"></template>
            </van-swipe>
          </div>
          <div v-for="i in pages" :key="i +'pages'">
            <div class="box box_bcg">
              <choiceBook :choiceList="choiceList">
                <template #til>
                  <div class="til">
                    畅销精
                    <span>选</span>
                  </div>
                </template>
              </choiceBook>
            </div>
            <div class="box">
              <choiceBook :choiceList="choiceList" types="anima">
                <template #til>
                  <div class="til">主编力荐</div>
                </template>
              </choiceBook>
            </div>
            <div class="box">
              <choiceBook :choiceList="choiceList">
                <template #til>
                  <div class="til">
                    新书强推 |
                    <p>第7周</p>
                  </div>
                </template>
              </choiceBook>
            </div>
          </div>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>
<script lang="ts">
import choiceBook from "../../../components/ChoiceBook/index.vue";
import {
  defineComponent,
  computed,
  defineProps,
  ref,
  toRef,
  reactive,
  withDefaults,
  getCurrentInstance
} from "vue";
export default defineComponent({
  components: {
    choiceBook
  },
  props: {
    showPage: {
      type: Function
    }
  },
  setup(props) {
    const images = [
      require("../../../assets/choice/IMG_20220126_113908.jpg"),
      require("../../../assets/choice/IMG_20220126_114702.jpg"),
      require("../../../assets/choice/IMG_20220126_114720.jpg"),
      require("../../../assets/choice/IMG_20220126_114736.jpg")
    ];
    const chooseList = [
      {
        icon: require("../../../assets/choice/classify_1.png"),
        name: "分类"
      },
      {
        icon: require("../../../assets/choice/classify_2.jpg"),
        name: "排行"
      },
      {
        icon: require("../../../assets/choice/classify_2.jpg"),
        name: "三江"
      },
      {
        icon: require("../../../assets/choice/classify_3.jpg"),
        name: "剧场"
      },
      {
        icon: require("../../../assets/choice/classify_4.jpg"),
        name: "免费"
      },
      {
        icon: require("../../../assets/choice/classify_1.png"),
        name: "完本"
      }
    ];
    const choiceList = ref([]);
    let CurrentInstance = getCurrentInstance();
    let http =
      CurrentInstance &&
      CurrentInstance.appContext &&
      CurrentInstance.appContext.config &&
      CurrentInstance.appContext.config.globalProperties;
    const finished = ref(false);
    const getData = () => {
      pages.value = [1];
      finished.value = false;
      http &&
        http.$get &&
        http.$get("/getBoyChoice").then(e => {
          choiceList.value = e;
          refreshing.value = false;
          props.showPage && props.showPage();
        });
    };
    const pages = ref([1]);
    const onLoad = () => {
      let random = +Math.random().toFixed(2) + 0.2;
      if (pages.value.length >= 5) {
        finished.value = true;
        return;
      }
      setTimeout(() => {
        loading.value = false;
        pages.value.push(pages.value[pages.value.length - 1] + 1);
      }, random * 1000);
    };

    getData();
    const refreshing = ref(false);
    const loading = ref(false);
    const onRefresh = () => {
      getData();
    };
    return {
      images,
      chooseList,
      choiceList,
      refreshing,
      onRefresh,
      loading,
      onLoad,
      pages,
      finished
    };
  }
});
</script>
<style  scoped>
.all {
  padding: 20px 2vw;
  background: #dedede;
}
.choose_top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  padding: 15px;
  background-color: #000;
  color: #fff;
  margin-top: 6px;
  border-radius: 8px;
  margin-bottom: 10px;
}
.choose_top div img {
  width: 10vw;
  margin-bottom: 7px;
  height: 10vw;
}
.choose_top div {
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #fff;
}
.swipe_content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.swipe_content .left {
  display: flex;
  align-items: center;
}
.swipe_content span {
  color: #fff;
}
.swipe_content p {
  padding: 3px 8px;
  margin-right: 2.6vw;
  transform: scale(0.8);
  color: #fff;
  border-radius: 8px 0 8px 0;
  background: red;
  box-shadow: 2px 0px 2px rgb(255, 136, 115) inset,
    -2px 0px 2px rgb(255, 136, 115) inset;
}
.choose {
  background: #000;
  padding: 10px;
  border-radius: 6px;
  /* box-shadow: -2px -2px 4px #000; */
}
.til {
  font-size: 18px;
  display: flex;
  align-items: center;
}
.til p {
  font-size: 14px;
  color: rgb(170, 170, 170);
  margin-left: 4px;
  margin-top: 2px;
}
.til span {
  color: transparent;
  background: linear-gradient(rgb(206, 206, 206), rgb(255, 79, 79));
  -webkit-background-clip: text;
  font-size: 17px;
}
.box {
  padding: 10px;
  background-color: #fff;
  margin-top: 6px;
}
.van-list {
  padding-bottom: 20px;
}
.box_bcg {
  position: relative;
}
.box_bcg::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  background: linear-gradient(rgb(255, 150, 150), rgb(235, 232, 232));
  width: 20vw;
  height: 38px;
  opacity: 0.4;
  border-radius: 0 0 34px 0;
}
</style>