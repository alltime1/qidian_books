import { useRouter } from "vue-router"
import {useStore} from "vuex"
  const routerPush = (data) =>{
    const route = useRouter();
    const store = useStore();
    console.log(useStore());
    
    store.dispatch("changeFadeWay", "fadeEnter")
    route.push(data)
  }
  const routerGo = (data) => {
    const route = useRouter();
    const store = useStore();
    store.dispatch("changeFadeWay", "fadeLeave")
    route.go(data)
  }
export {routerPush,routerGo}