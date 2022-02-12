<template>
  <div>
    <!-- <transition :name="fade">
      <router-view></router-view>
    </transition>-->
    <router-view v-slot="{ Component}">
      <transition style="position:absolute;left:0;top:0;width:100%;height:100vh;background:#fff" :name="store.state.fadeWay">
        <component  :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent, getCurrentInstance, ref ,onUpdated} from "vue";
import {useStore} from "vuex"
import component from "*.vue";
export default defineComponent({
  setup() {
    //  console.log(getCurrentInstance().appContent);
    const fade = ref("fadeEnter");
   let store = useStore()
    
    return {
      store
    };
  }
});
</script>
<style>
.fadeEnter-enter-active {
  transition: all .2s ease;
  z-index: 10;
}
.fadeEnter-leave-active {
  z-index: -1;
}
.fadeEnter-leave-to {
  transition: all 1s ease;
 
}
.fadeEnter-enter-from {
  transform: translateX(80%);
}
* {
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
}
html,
body {
  width: 100vw;
  height: 100vh;
}
.text_hidden {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.text_hidden2 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;

  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
}
</style>
