<template>
  <div class="home">
    <van-tabbar v-model="active" active-color="red" @change="onChange">
      <van-tabbar-item icon="home-o">
        <span>书架</span>
        <template #icon="props">
          <img
            :src="props.active ?  require('../assets/image/bookStack2.svg') : require('../assets/image/bookStack.svg')"
          />
        </template>
      </van-tabbar-item>
      <van-tabbar-item icon="search">
        <span>精选</span>
        <template #icon="props">
          <img
            :src="props.active ? require('../assets/image/choose2.svg') : require('../assets/image/choose.svg')"
          />
        </template>
      </van-tabbar-item>
      <van-tabbar-item icon="friends-o">
        <span>发现</span>
        <template #icon="props">
          <img
            :src="props.active ? require('../assets/image/find2.svg') : require('../assets/image/find.svg')"
          />
        </template>
      </van-tabbar-item>
      <van-tabbar-item icon="setting-o">
        <span>我的</span>
        <template #icon="props">
          <img
            :src="props.active ? require('../assets/image/mine2.svg') : require('../assets/image/mine.svg')"
          />
        </template>
      </van-tabbar-item>
    </van-tabbar>
    <component :is="switchComp"></component>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component"; // @ is an alias to /src
import { defineComponent, watch, ref, Ref } from "vue";
import { useRouter } from "vue-router";
// const BookShelf =()=> import("./BookShelf/index.vue")
import BookShelf from "./bookShelf/index.vue";
import choice from "./choice/index.vue";
// interface interFaceData{
//   active:Ref<number>,

// }
// @Options({
//   components: {
//       BookShelf
//   }
// })

export default defineComponent({
  components: {
    BookShelf,
    choice
  },
  setup() {
    let router = useRouter();
    // router.afterEach({
    //     if (from.name == "detail") {
    //     alert("发现了");
    //     next(
    //       ()=>{
    //       // setTimeout(()=>{
    //       //     switchComp.value = "choice";
    //       //     active.value = 1
    //       // },200)

    //     });
    //   } else {
    //     next();
    //   }
    // }
    const active = ref(0);
    // router.beforeEach((to, from, next) => {
    //   console.log(from);
    //   if (from.name == "detail") {
        
    
        
    //     next((vm)=> console.log(vm,"wdweeqweqeqeqweqeqw")
    //     );
    //   } else {
    //     next();
    //   }
    // });
    
    const onChange = (index: number) => {
      console.log(index);
      switch (index) {
        case 0:
          switchComp.value = "book-shelf";
          break;
        case 1:
          switchComp.value = "choice";
          break;
      }
    };

    let switchComp = ref("book-shelf");
    return {
      active,
      onChange,
      switchComp
    };
  }
});
// export default class Home extends Vue {

//   data() :interFaceData {
//     return {
//       active:ref(0)
//     }
//   }
//   // setup() {
//   //   console.log(this.a);

//   //   const active = ref(0);
//   //   console.log(active);

//   //   return {
//   //     active
//   //   }
//   // }
// }
</script>
<style scoped>
</style>