<template>
  <div>
    <van-nav-bar @click-left="back" title="标题" left-text="返回" left-arrow>
      <template #right>
        <van-icon name="ellipsis" size="18" color="#fff" />
      </template>
      <template #title></template>
      <template #left>
        <van-icon name="arrow-left" color="#fff" size="18" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import {routerGo} from "../../mixin/index"
export default defineComponent({
  name: "",
  setup(props) {
    // console.log(useRoute().query.value);
    let route = useRoute();
    let router = useRouter();
    const id = route.query.bookId;

    let store = useStore();
    // const back = () => {
    //   store.dispatch("changeFadeWay", "fadeLeave");
    //   router.go(-1);
    // };
    routerGo(-1)
    return {
      back
    };
  }
});
</script>

<style scoped>
.van-nav-bar {
  background: rgb(194, 30, 30);
}
</style>
