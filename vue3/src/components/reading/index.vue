<template>
  <div class="all">
    <van-popup v-model:show="showHandler" :overlay="false" position="top" :style="{ height: '6%' }">
      <div class="back_route">
        <van-icon @click="back" size="22" name="arrow-left" color="rgb(80, 67, 33)" />
      </div>
    </van-popup>
    <van-popup
      v-model:show="showHandler"
      position="bottom"
      :overlay="false"
      :style="{ height: '20%',background: 'rgb(248, 225, 168)' }"
    >
      <div class="set">
        <div class="setTop">
          <!-- <div class="listen">
            <van-icon class="icon" size="15" name="service-o" />听书
          </div>
          <div class="listen">
            <van-icon name="column" />仿真
          </div>-->
        </div>
        <div class="chapter">
          <p @click="nextChapter(true)">上一章</p>
          <van-progress
            color="rgb(156, 117, 18)"
            stroke-width="2"
            track-color="rgb(156, 117, 18)"
            :percentage="1"
          />
          <p @click="nextChapter(false)">下一章</p>
        </div>
      </div>
    </van-popup>
    <div
      class="book"
      @touchmove="handlerTouchmove"
      @touchend="handlerTouchend"
      @touchstart="handlerTouchstart"
      @click="showTotle"
    >
      <van-loading
        size="24px"
        color="#1989fa"
        style="margin-top:100px;position: absolute;
    z-index: 100;left:50%;transform: translate(-50%) "
        v-show="isLoading"
        vertical
      >加载中...</van-loading>
      <van-button
        style="margin-top:100px; margin-left: 50%;
    transform: translate(-50%);"
        @click="refresh"
        v-show="isFail && allword.length==0"
        round
        type="primary"
      >刷新</van-button>
      <div
        v-show="allword.length!==0"
        class="content"
        :style="{
        left:currentIndex == index ?  touchLong +'px' : 0,
        transition: currentIndex == index && anima?'all .2s':'none',
    
      }"
        :class="[
      currentIndex == index ? 'shows':'',
      
        currentIndex+1 == index ? 'showsp':'',  currentIndex-1 == index ? 'showsp':'',
        currentIndex-1 == index && isBack ? 'showCover':''
    ]"
        v-for="(item,index) in allword"
        :key="index"
      >
        <div v-if="index == 0" class="titles">正文卷 第{{nextpage}}章</div>
        <!-- <fangz> -->
        <span v-html="item" style="display:block"></span>
        <!-- </fangz> -->
      </div>
    </div>
  </div>
</template>

<script >
import {
  defineComponent,
  onMounted,
  toRef,
  watch,
  ref,
  Ref,
  getCurrentInstance,
  defineProps
} from "vue";
import fangz from "./fangz.vue";
import { Notify } from "vant";
export default defineComponent({
  props: {
    page: {
      type: Number,
      default: 0
    },
    bookId: {
      type: Number,
      default: 0
    },
    hidden: {
      type: Function
    }
  },
  components: {
    fangz
  },
  name: "Reading",
  setup(props) {
    let firstPage = props.page;
    let firstBookId = props.bookId;
    onMounted(() => {
      detData(props.page, props.bookId);
    }),
      // page=1&bookId=0
      defineProps({ bookId: Number, page: Number, hidden: Function });
    console.log(props);
    let CurrentInstance = getCurrentInstance();

    const currentIndex = ref(0);
    // const page = toRef(props, "page"),
    //   bookId = toRef(props, "bookId");
    watch(
      () => props.page,
      (e) => {
       
        detData(e, firstBookId);
      }
    );
    watch(
      () => props.bookId,
      (e) => {
        detData(firstPage, e);
      }
    );
    const currentPageIndex = ref(0); //当前页面页数
    const cutChaper = (word, up) => {
      let height2 = document.body.clientHeight - 40;
      let height = document.body.clientHeight - 40 - 49;
      let fontSize = 20;
      let biaojian = 10; //7.5的边距
      let width = document.body.clientWidth - 40; //减去padding的
      let nowWidth = 0; //每次添加内容 计算宽度
      let heightMax = 0; //最大高度
      let dotNum = 0; //·计算个数
      let onePageWord = "";
      allword.value = [];
      currentIndex.value = 0;
      let wordMatch = word.replace(
        /\第[^x00-xff]*\章[^x00-xff]*\第\d\/\d\页\)/g,
        ""
      );
      let words = wordMatch.match(/[^x00-xff]|<br>/g);
      let getWidth = e => {
        let val = 0;
        if (e == "&") {
          val = (7.56 / 20) * fontSize;
        } else if (e == "<br>") {
          val = 0;
        } else if (e == ".") {
          val = (7.56 / 20) * fontSize;
        } else if (e == "“" || e == "”") {
          val = (8.66 / 20) * fontSize;
        } else {
          val = 22;
        }
        return val;
      };
      let changeWidth = e => {
        let val = 0;
        if (e == "&") {
          onePageWord += "&nbsp;";
          nowWidth += (7.56 / 20) * fontSize;
          val = (7.56 / 20) * fontSize;
        } else if (e == "<br>") {
          onePageWord += "<br>";
          heightMax += (30 / 20) * fontSize;
          nowWidth = 0;
          val = 0;
        } else if (e == ".") {
          onePageWord += ".";
          // dotNum += 1;
          nowWidth += (7.56 / 20) * fontSize;
          val = (7.56 / 20) * fontSize;
        } else if (e == "“" || e == "”") {
          onePageWord += e;
          // dotNum += 1;
          nowWidth += (8.66 / 20) * fontSize;
          val = (8.66 / 20) * fontSize;
        } else {
          onePageWord += e;
          nowWidth += 22;
          val = 22;
        }
      };
      currentPageIndex.value = 0;
      words.forEach((e, i) => {
        changeWidth(e);
        if (nowWidth > width) {
          heightMax += (30 / 20) * fontSize;
          nowWidth = getWidth(e);
        }
        if (nowWidth == width) {
          heightMax += (30 / 20) * fontSize;
          nowWidth = 0;
        }
        if (heightMax + (30 / 20) * fontSize > height) {
          allword.value.push(onePageWord.slice(0, -1));
          onePageWord = e;
          nowWidth = getWidth(e);
          height = height2;
          heightMax = getWidth(e) == 0 ? (30 / 20) * fontSize : 0;
          // getWidth
          currentPageIndex.value += 1;

          // return;
        }
        if (i === words.length - 1 && heightMax <= height) {
          currentPageIndex.value += 1;
          if (up) {
            currentIndex.value = currentPageIndex.value;
          }
          allword.value.push(onePageWord.slice(0, -1));
        }
      });
      setTimeout(() => {
        times.value = false;
      }, 50);
    };
    // 数据缓存不然

    //

    let http =
      CurrentInstance &&
      CurrentInstance.appContext &&
      CurrentInstance.appContext.config &&
      CurrentInstance.appContext.config.globalProperties;
    const isLoading = ref(false);
    function detData(getPage, getBookId, distance) {
      let preName = "book_" + (getBookId || 0) + "_" + getPage;
 
      let chachControl = localStorage.getItem(preName); //缓存数据
      let chachControlData = null;
      isLoading.value = true;
      if (chachControl !== null) {
        chachControlData = JSON.parse(chachControl);
      }
      if (chachControlData) {
        isLoading.value = false;
        if (distance == "up") {
          nextpage.value -= 1;
          cutChaper(chachControlData, true);
        } else {
          cutChaper(chachControlData);
        }

        return;
      }

      http &&
        http.$get &&
        http
          .$get("/biquge?" + "page=" + getPage + "&bookId=" + getBookId)
          .then(e => {
            nextpage.value =getPage
            isLoading.value = false;
            word.value = e[0] + e[1] + e[2];
            //缓存不然炸裂
            localStorage.setItem(preName, JSON.stringify(word.value));
            if (distance == "up") {
              nextpage.value -= 1;
              cutChaper(word.value, true);
            } else {
              cutChaper(word.value);
            }
          })
          .catch(e => {
            console.log(e);
            times.value = false;
            isLoading.value = false;
            isFail.value = true;
            Notify({ type: "danger", message: "请求失败！" });
          });
    }

    const isFail = ref(false);

    let word = ref("");
    const wordRef = ref(null);
    let allword = ref([]);
    // onMounted(() => {

    // });
    const refresh = e => {
      isFail.value = false;
      detData(nextpage.value, firstBookId);
      e.stopPropagation();
    };
    // detData(page.value, bookId.value);

    const touchLong = ref(0);
    let start = 0;
    const handlerTouchstart = e => {
      anima.value = false;
      start = e.targetTouches[0].pageX;
    };
    // : ReturnType<typeof setTimeout> | number
    let times = ref(false);
    const handlerTouchmove = e => {
      if (times.value) {
        console.log(currentIndex.value);
        return;
      }
      times.value = setTimeout(() => {
        if (currentIndex.value == 0 && e.changedTouches[0].pageX - start > 0) {
          detData(nextpage.value, props.bookId, "up");
          clearTimeout(times.value);
          // times.value = true;
          return;
        }
        if (
          currentIndex.value >= allword.value.length - 1 &&
          e.changedTouches[0].pageX - start < 0
        ) {
          nextpage.value += 1;
          detData(nextpage.value, props.bookId, "down");
          clearTimeout(times.value);
          //  as ReturnType<typeof setTimeout>
          // times.value = true;
          return;
        }
        touchLong.value = e.changedTouches[0].pageX - start;
        console.log(touchLong.value);

        if (touchLong.value > 0) {
          isBack.value = true;
        } else {
          isBack.value = false;
        }
        clearTimeout(times.value);
        times.value = false;
      }, 20);
    };
    const anima = ref(false);
    const isBack = ref(false);
    const handlerTouchend = () => {
      // if (currentIndex.value >= allword.value.length - 1) {
      //   return;
      // }
      let width = document.body.clientWidth;
      console.log(touchLong.value);
      //添加动画
      anima.value = true;

      if (Math.abs(touchLong.value) > 40) {
        if (touchLong.value > 0) {
          touchLong.value = width;
          let time = setTimeout(() => {
            currentIndex.value -= 1;
            anima.value = false;
            touchLong.value = 0;
            clearTimeout(time);
          }, 200);
        } else {
          touchLong.value = -width;
          let time = setTimeout(() => {
            currentIndex.value += 1;
            anima.value = false;
            touchLong.value = 0;
            clearTimeout(time);
          }, 200);
        }
      } else {
        let time = setTimeout(() => {
          touchLong.value = 0;
          clearTimeout(time);
        }, 100);
      }
    };
    const showHandler = ref(false);
    const showTotle = e => {
      e.stopPropagation();
      showHandler.value = !showHandler.value;
    };
    const nextpage = ref(firstPage);
    const nextChapter = back => {
      if (nextpage.value < 0) {
        return;
      }
      if (isLoading.value) {
        return;
      }
      if (back) {
        nextpage.value -= 1;
        if (nextpage.value < 0) {
          return;
        }
      } else {
        nextpage.value += 1;
      }

      detData(nextpage.value, firstBookId);
    };
    const back = () => {
      // store.dispatch("changePageIndex", 1);
      // store.dispatch("changeFadeWay", "fadeLeave");
      // router.go(-1);
      props.hidden && props.hidden(false);
    };
    return {
      word,
      allword, //切割数据
      currentIndex,
      // wordRef,
      handlerTouchstart,
      handlerTouchmove,
      handlerTouchend, //
      touchLong,
      anima, //开启动画
      isBack,
      nextChapter,
      showTotle,
      showHandler,
      back,
      refresh,
      isFail,
      isLoading,
      nextpage
    };
  }
});
</script>

<style scoped>
.book {
  padding: 20px;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
}
.titles {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
  height: 29px;
}
.content {
  /* white-space: pre-wrap; */
  position: absolute;
  background: rgba(245, 234, 204);
  left: 0;
  top: 0;
  padding: 20px;
  /* transition: left .3s; */
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  overflow: hidden;
  letter-spacing: 2px;
  line-height: 30px;
  font-size: 20px;
}
.shows {
  z-index: 10;
}
.showsp {
  z-index: 8;
}
.showCover {
  z-index: 9;
}
.back_route {
  height: 100%;
  display: flex;
  align-items: center;
  background: rgb(248, 225, 168);
  padding-left: 8px;
}

.listen {
  background-color: rgb(252, 210, 105);
  width: fit-content;
  padding: 8px 12px;
  border-radius: 3px;
  font-size: 12px;
  margin-bottom: 6px;
}
.listen .icon {
  margin-right: 3px;
}
.chapter {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.chapter .van-progress {
  flex: 1;
  margin: 0 14px;
}
.set {
  margin: 14px;
  color: rgb(139, 102, 6);
}
.chapter .van-progress >>> .van-progress__pivot {
  background: #fff !important;
  overflow: hidden;

  min-width: 18px;
  display: block;
  height: 18px;
  padding: 0;
  width: 18px;
  border-radius: 18px;
  box-shadow: 0px 0px 1px 0px rgb(139, 102, 6);
}
.setTop {
  display: flex;
  justify-content: space-between;
}
</style>
