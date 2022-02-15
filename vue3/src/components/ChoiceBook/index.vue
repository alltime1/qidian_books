<template>
  <div class="moreType">
    <div class="all" v-if="types=='default'">
      <div class="top">
        <slot name="til">标题</slot>
        <div class="more">
          更多
          <svg
            t="1644481893595"
            class="icons"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2177"
            width="200"
            height="200"
          >
            <path
              d="M857.70558 495.009024 397.943314 27.513634c-7.132444-7.251148-18.794042-7.350408-26.048259-0.216941-7.253194 7.132444-7.350408 18.795065-0.216941 26.048259l446.952518 454.470749L365.856525 960.591855c-7.192819 7.192819-7.192819 18.85544 0 26.048259 3.596921 3.596921 8.311293 5.39487 13.024641 5.39487s9.42772-1.798972 13.024641-5.39487L857.596086 520.949836C864.747973 513.797949 864.796068 502.219239 857.70558 495.009024z"
              p-id="2178"
            />
          </svg>
        </div>
      </div>
      <div
        class="oneBook"
        @click="enterBook(item.id)"
        v-for="(item,index)  in  choiceList"
        :key="'choice'+index"
      >
        <div class="posi">
          <img :src="item.icon" alt />
        </div>
        <div class="detail">
          <p class="hiddenLine">{{item.name}}</p>
          <span class="hiddenLine" style="flex:1">{{item.introduce}}</span>
          <div class="looking hiddenLine">
            <span>{{item.classify}} · {{item.wordNum}}字</span>
            <div class="classify">
              <div class="plusIcon">起</div>
              <span
                v-for="(data,index) in item.classify2.split(',')"
                :key="data"
                :class="
             index==0&&'especially'
           "
              >{{data}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="another" v-if="types=='anima'">
      <div class="top">
        <slot name="til">标题</slot>
        <div class="more">
          更多
          <svg
            t="1644481893595"
            class="icons"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2177"
            width="200"
            height="200"
          >
            <path
              d="M857.70558 495.009024 397.943314 27.513634c-7.132444-7.251148-18.794042-7.350408-26.048259-0.216941-7.253194 7.132444-7.350408 18.795065-0.216941 26.048259l446.952518 454.470749L365.856525 960.591855c-7.192819 7.192819-7.192819 18.85544 0 26.048259 3.596921 3.596921 8.311293 5.39487 13.024641 5.39487s9.42772-1.798972 13.024641-5.39487L857.596086 520.949836C864.747973 513.797949 864.796068 502.219239 857.70558 495.009024z"
              p-id="2178"
            />
          </svg>
        </div>
      </div>
      <div
        :style="{
        opacity: showCurrent == index ? 1 : 0
      }"
        class="oneBooks"
        v-for="(item,index)  in  choiceList"
        :key="'choice'+index"
      >
        <div class="top_content">
          <p class="text_hidden2" :class="index == showCurrent ? 'anima':'' ">
            {{item.introduce}}
            <span :class="index == showCurrent ? 'anima':'' ">———— 主编说</span>
          </p>
          <p :class="index == showCurrent ? 'anima':'' ">{{item.name}}</p>
          <div class="looking hiddenLine">
            <span :class="index == showCurrent ? 'anima':'' ">{{item.classify}} · {{item.wordNum}}字</span>
            <div class="classify">
              <span
                v-for="(data,indexs) in item.classify2.split(',')"
                :key="data"
                :class="[
             indexs==0&&'especially',index == showCurrent ? 'anima':''
           ]"
              >{{data}}</span>
            </div>
          </div>
        </div>
        <div class="pic">
          <img
            :class="opacityImg"
            v-for="(item,indexx)  in  newArr"
            :key="'img'+indexx"
            :src="item"
            alt
            srcset
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  defineProps,
  ref,
  PropType,
  watch,
  ComputedRef,
  Ref,
  onMounted,
  toRef,
  onUpdated,
  onBeforeUnmount,
  withDefaults
} from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
interface choiceList {
  icon: string;
}
export default defineComponent({
  props: {
    choiceList: {
      default: [],
      type: Array as PropType<choiceList[]>
    },
    types: {
      default: "default",
      type: String
    }
  },
  setup(props) {
    const opacityImg = ref("opacityImg");
    const showCurrent = ref(0);
    let newsPicPosi = ref([]);
    const routers = useRouter();
    // let imgArr:ComputedRef<Ref<Array<string>>> =computed(()=>{
    //   newsPicPosi = currentPosi(props.choiceList, showCurrent.value);
    //   return setTimeout(()=>{currentPosi(newsPicPosi, 0);},2000)
    // })
    let store = useStore();

    let enterBook = i => {
      store.dispatch("changeFadeWay", "fadeEnter");
      routers.push({
        path: "/detail",
        query: {
          bookId: i
        }
      });
    };
    let newArr: Ref<Array<string>> = ref([]);
    // // onUpdated(() => {
    let lastIcons: Ref<Array<{
      icon: string;
    }>> = ref([]);
    let time, time2, time3;
    const startRun = function() {
      time3 = setInterval(() => {
        currentPosi(lastIcons.value, 0);
      }, 2000);

      time = setInterval(() => {
        opacityImg.value = "opacityImg";
        if (showCurrent.value < 2) {
          showCurrent.value += 1;
        } else {
          showCurrent.value = 0;
        }
        // currentPosi(props.choiceList, showCurrent.value);
      }, 2000);
      time2 = setInterval(() => {
        opacityImg.value = "";
      }, 1800);
    };
    if (props.choiceList.length > 0) {
      newArr.value = [];
      // lastIcons.value = data;
      let reserveArr: choiceList[] = props.choiceList;
      let arr: Array<any> = [];
      reserveArr.forEach(e => {
        newArr.value.unshift(e.icon);
        arr.unshift({ icon: e.icon });
      });
      lastIcons.value = arr;
      //  console.log(lastIcons.value );
      clearInterval(time);
      clearInterval(time2);
      clearInterval(time3);
      // currentPosi(reserveArr, 0);
      // newArr.value = reserveArr
      startRun();
    } else {
      watch(
        () => props.choiceList,
        data => {
          newArr.value = [];
          // lastIcons.value = data;
          let reserveArr: choiceList[] = data;
          let arr: Array<any> = [];
          reserveArr.forEach(e => {
            newArr.value.unshift(e.icon);
            arr.unshift({ icon: e.icon });
          });
          lastIcons.value = arr;
          //  console.log(lastIcons.value );
          clearInterval(time);
          clearInterval(time2);
          clearInterval(time3);
          // currentPosi(reserveArr, 0);
          // newArr.value = reserveArr
          startRun();
        }
      );
    }

    //  watch:{
    //    'props.choiceList' : ()=>{
    //        lastIcons.value = props.choiceList
    //    }
    //  }

    const currentPosi = (
      arr: Array<{
        icon: string;
      }>,
      index: Number
    ): void => {
      // 0           1                2
      // 0 1 2  =>           =>
      // 2 1 0      0 2 1            1 0 2

      // 2 0 1
      newArr.value = [];
      arr.forEach(element => {
        newArr.value.push(element.icon);
      });

      let lastIcon = newArr.value[newArr.value.length - 1];
      newArr.value.pop();
      newArr.value.unshift(lastIcon);
      let icons: Array<{
        icon: string;
      }> = [];
      newArr.value.forEach(element => {
        icons.push({
          icon: element
        });
      });
      lastIcons.value = icons;
    };
    // currentPosi(props.choiceList, showCurrent.value);
    // }),
    //  computed:{
    //    imgArr:()=>{
    //      console.log(showCurrent.value);

    //      return showCurrent
    //       // currentPosi(props.choiceList,showCurrent.value)
    //    }
    //  }

    onBeforeUnmount(() => {
      clearInterval(time);
      clearInterval(time2);
      clearInterval(time3);
    });
    return {
      showCurrent,
      opacityImg,
      newArr,
      enterBook
    };
  }
});
</script>

<style scoped>
.oneBook {
  display: flex;
  margin-bottom: 2vw;
  position: relative;
}
.oneBook img {
  width: 16vw;
  object-fit: contain;
}
.posi {
  position: relative;
  width: 16vw;
  margin-right: 2vw;
}
.posi p {
  position: absolute;
  top: 0;
  right: 0.9vw;
  font-size: 12px;
  color: #fff;
  background: red;
  padding: 0 4px 3px 4px;
  border-radius: 0 0 4px 4px;
}
.detail {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.2rem 0;
}
.detail span {
  color: rgb(114, 114, 114);
  font-size: 14px;
}
.detail span:nth-child(3) {
  display: block;
  color: rgb(255, 238, 0);
}
.oneBook .detail .looking {
  color: rgb(114, 114, 114);
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.hiddenLine {
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  width: 74vw;
  max-height: 40px;
}
.icon {
  position: absolute;
  right: 0.2vw;
  top: 0.3vw;
  height: auto;
  width: 5vw;
}
.classify {
  transform: scale(0.9);
  display: flex;
  position: relative;
  align-items: center;
}
.classify .plusIcon {
  position: absolute;
  left: -10px;
  top: 0;
  z-index: 1;
  padding: 2px;
  color: #fff;
  background: red;
  border-radius: 4px;
}
.detail .classify span {
  background-color: rgb(241, 241, 241);
  color: rgb(155, 155, 155);
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 12px;
  margin-left: 4px;
  display: block;
}
.detail .classify .especially {
  color: red;
  background: rgb(255, 190, 190);
  font-weight: 300;
}
.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}
.top .more {
  border: 1px solid #ddd;
  padding: 4px 14px;
  border-radius: 12px;
  font-size: 12px;
}
.more .icons {
  margin-bottom: 1px;
  width: 10px;
  height: 10px;
}
.another {
  position: relative;
  height: 300px;
}
.another .oneBooks {
  position: absolute;
  transform: opacity 0.3s;
}
.top_content {
  background: rgb(221, 212, 212);
  color: rgb(184, 102, 102);
  padding: 10px 18px;
  border-radius: 10px;
  height: 120px;
}
.top_content p,
.top_content span {
  transition: all 0.8s;
  transform: translateX(10px);
  opacity: 0.2;
}
.text_hidden2 {
  font-size: 18px;
}
.text_hidden2 span {
  font-size: 14px;
}
.top_content p {
  margin-top: 8px;
  margin-bottom: 4px;
}
.top_content .looking {
  display: flex;
  align-items: center;
}
.classify span {
  margin-left: 5px;
}
.oneBooks .anima {
  transform: translateX(0);
  opacity: 1;
  animation: anima 0.1s;
  animation-delay: 1.9s;
}
.opacityImg {
  animation: anima2 0.4s;
}
.oneBooks .pic {
  display: flex;
  align-items: center;
}
.oneBooks .pic img {
  width: 12vw;
  margin-left: 1vw;
}

.oneBooks .pic img:last-child {
  position: absolute;
  right: 10px;
  width: 22vw;
  object-fit: contain;
  bottom: 0;
}
@keyframes anima {
  100% {
    opacity: 0.5;
  }
}
@keyframes anima2 {
  100% {
    opacity: 0.5;
  }
}
</style>
