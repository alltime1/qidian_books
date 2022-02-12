<template>
  <div>
    <van-tabs v-model:active="active" @change="onClickTab" swipeable sticky>
      <van-tab title="男生">
        <div class="cover" :style="{
            'z-index':zIndex
          }">
          <van-loading style="text-align:center;margin-top:30vh" color="#000" />
      
        </div>
        <boyChoice :showPage="showPage"></boyChoice>
      </van-tab>
      <van-tab title="女生">
        <div class="fail" :style="{
            'z-index':10
          }">
          <van-loading v-if="curIndex == 1" style="text-align:center;margin-top:30vh" color="#000" />
            <van-empty
            class="custom-image"
            image="https://img.yzcdn.cn/vant/custom-empty-image.png"
            description="加载失败！"
            style="margin-top:20vh"
            v-if="curIndex !== 1"
          />
        </div>
      </van-tab>
      <van-tab title="胶囊">
        <div class="fail" :style="{
            'z-index':10
          }">
          <van-loading v-if="curIndex == 2" style="text-align:center;margin-top:30vh" color="#000" />
          <van-empty
            class="custom-image"
            image="https://img.yzcdn.cn/vant/custom-empty-image.png"
            description="加载失败！"
            style="margin-top:20vh"
            v-if="curIndex !== 2"
          />
        </div>
      </van-tab>
      <van-tab title="漫画">
        <div class="fail" :style="{
            'z-index':10
          }">
          <van-loading v-if="curIndex == 3" style="text-align:center;margin-top:30vh" color="#000" />
            <van-empty
            class="custom-image"
            image="https://img.yzcdn.cn/vant/custom-empty-image.png"
            description="加载失败！"
            style="margin-top:20vh"
            v-if="curIndex !== 3"
          />
        </div>
      </van-tab>
      <van-tab title="听书">
        <div class="fail" :style="{
            'z-index':10
          }">
          <van-loading v-if="curIndex == 4" style="text-align:center;margin-top:30vh" color="#000" />
            <van-empty
            class="custom-image"
            image="https://img.yzcdn.cn/vant/custom-empty-image.png"
            description="加载失败！"
            style="margin-top:20vh"
            v-if="curIndex !== 4"
          />
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script lang="ts">
import boyChoice from "./boyChoice/index.vue";
import {
  defineComponent,
  computed,
  defineProps,
  ref,
  toRef,
  watch,
  withDefaults
} from "vue";
export default defineComponent({
  components: {
    boyChoice
  },
  setup() {
    
    let onClickTab = i => {
      curIndex.value = i;
      setTimeout(() => {
        curIndex.value = -1;
      }, 4000);
    };
    const curIndex = ref(0);
    const zIndex = ref(10);
    const showPage = () => {
      zIndex.value = -1;
    };
    const active = ref(0);
    watch(()=>active,(newVal)=>{
      console.log(newVal);

    })
    return {
      active,
      zIndex,
      showPage,
      onClickTab,
      curIndex
    };
  }
});
</script>
<style scoped>
.cover {
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  background-color: #fff;
  z-index: 10;
}
.fail {
  width: 100%;
}
</style>