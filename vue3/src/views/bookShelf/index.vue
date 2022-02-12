<template>
  <div>
    <header>
      <div class="header_top">
        <div class="header_content">
          <p>书架</p>
          <svg
            t="1644378650619"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2146"
            width="200"
            height="200"
          >
            <path
              d="M65.582671 288.791335l446.417329 446.41733 446.417329-446.41733z"
              p-id="2147"
              fill="#ffffff"
            />
          </svg>
        </div>
        <div class="header_search"></div>
        <svg
          t="1644380853674"
          class="icon"
          style="transform:rotate(-60deg)"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="5181"
          width="200"
          height="200"
        >
          <path
            d="M511.735 954.453C268.163 954.453 70 756.3 70 512.735c0-117.925 45.9-228.815 129.25-312.246 4.478-4.49 10.44-6.961 16.789-6.961 6.338 0 12.297 2.463 16.775 6.946 9.255 9.246 9.264 24.299 0.021 33.554-74.399 74.47-115.37 173.449-115.37 278.707 0 217.393 176.868 394.256 394.27 394.256 217.392 0 394.26-176.863 394.26-394.256 0-209.576-162.229-381.191-370.531-393.563l0 132.31c0 13.088-10.644 23.736-23.729 23.736-13.09 0-23.738-10.648-23.738-23.736L487.997 71l23.738 0c117.802 0 228.679 46.001 312.207 129.524 83.522 83.527 129.524 194.404 129.52 312.211C953.461 756.3 755.302 954.453 511.735 954.453L511.735 954.453zM511.73 571.31c-15.641 0-30.347-6.093-41.405-17.153-20.584-20.588-175.587-246.609-182.176-256.224l8.783-8.781c9.611 6.589 235.623 161.586 256.208 182.178 11.063 11.062 17.16 25.769 17.16 41.419 0 15.649-6.093 30.354-17.16 41.412-11.059 11.059-25.765 17.149-41.406 17.149L511.73 571.31 511.73 571.31zM511.73 571.31"
            p-id="5182"
            data-spm-anchor-id="a313x.7781069.0.i15"
            class
            fill="#ffffff"
          />
        </svg>
        <svg
          t="1644380879220"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="6737"
          width="200"
          fill="#fff"
          height="200"
        >
          <path
            d="M223.962372 607.897867c-52.980346 0-95.983874-43.003528-95.983874-95.983874s43.003528-95.983874 95.983874-95.983874 95.983874 43.003528 95.983874 95.983874S276.942718 607.897867 223.962372 607.897867z"
            p-id="6738"
          />
          <path
            d="M511.913993 607.897867c-52.980346 0-95.983874-43.003528-95.983874-95.983874s43.003528-95.983874 95.983874-95.983874 95.983874 43.003528 95.983874 95.983874S564.894339 607.897867 511.913993 607.897867z"
            p-id="6739"
          />
          <path
            d="M800.037628 607.897867c-52.980346 0-95.983874-43.003528-95.983874-95.983874s43.003528-95.983874 95.983874-95.983874 95.983874 43.003528 95.983874 95.983874S852.84596 607.897867 800.037628 607.897867z"
            p-id="6740"
          />
        </svg>
      </div>
    </header>

    <van-pull-refresh
      pulling-text="下拉刷新"
      loosing-text="释放刷新"
      v-model="isLoading"
      :head-height="50"
      @refresh="onRefresh"
    >
      <!-- 下拉提示，通过 scale 实现一个缩放效果 -->
      <!-- <template #pulling="props">
            <img
              class="doge"
              src="https://img.yzcdn.cn/vant/doge.png"
              :style="{ transform: `scale(${props.distance / 80})` }"
            />
      </template>-->

      <!-- 释放提示 -->
      <!-- <template #loosing>
            <img class="doge" src="https://img.yzcdn.cn/vant/doge.png" />
      </template>-->

      <!-- 加载提示 -->
      <template #loading>
        <div style="display:flex;align-items:center;flex-direction: column;">
          <van-loading size="18" color="red" />
          <p style=" font-size:14px; line-height: 20px;">正在加载中...</p>
        </div>
      </template>
      <div class="content">
        <div class="contentShow">
          <div class="hello">
            <svg
              t="1644390625170"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="11173"
              width="200"
              height="200"
            >
              <path
                d="M759.051 949.125H264.948c-83.037 0-150.36-67.324-150.36-150.36V357.64c0-83.032 67.324-150.36 150.36-150.36h494.103c83.037 0 150.362 67.329 150.362 150.36v441.125c-0.095 83.036-67.325 150.36-150.362 150.36z m0 0"
                fill="red"
                p-id="11174"
              />
              <path
                d="M909.413 693.257v79.066c-0.095 82.937-67.325 150.26-150.362 150.26H264.948c-83.037 0-150.36-67.324-150.36-150.355v-441.03c0-83.037 67.324-150.36 150.36-150.36h494.103c83.037 0 150.362 67.324 150.362 150.36v102.059m0 84v87.999M759.051 922.583"
                fill="red"
                p-id="11175"
                data-spm-anchor-id="a313x.7781069.0.i0"
                class="selected"
              />
              <path
                d="M759.051 937.583H264.948c-91.18 0-165.36-74.178-165.36-165.355v-441.03c0-91.18 74.18-165.36 165.36-165.36h494.103c91.181 0 165.362 74.18 165.362 165.36v102.059c0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15V331.198c0-74.638-60.723-135.36-135.362-135.36H264.948c-74.638 0-135.36 60.723-135.36 135.36v441.03c0 74.635 60.722 135.355 135.36 135.355h494.103c74.553 0 135.276-60.685 135.362-135.277v-79.049c0-8.284 6.716-15 15-15 8.284 0 15 6.716 15 15v79.066c-0.105 91.132-74.286 165.26-165.362 165.26z m150.362-317.326c-8.284 0-15-6.716-15-15v-88c0-8.284 6.716-15 15-15 8.284 0 15 6.716 15 15v88c0 8.284-6.716 15-15 15z"
                fill="red"
                p-id="11176"
              />
              <path
                d="M725.049 868.579h-61.807c-8.284 0-15-6.716-15-15s6.716-15 15-15h61.807c8.284 0 15 6.716 15 15s-6.716 15-15 15z m-147.807 0h-290c-8.284 0-15-6.716-15-15s6.716-15 15-15h290c8.284 0 15 6.716 15 15s-6.716 15-15 15z"
                fill="red"
                p-id="11177"
              />
              <path
                d="M308.855 251.482c0 34.165 27.695 61.86 61.86 61.86s61.86-27.695 61.86-61.86-27.695-61.865-61.86-61.865-61.86 27.7-61.86 61.865z m0 0M582.545 251.482a61.873 61.873 0 0 0 30.929 53.575 61.88 61.88 0 0 0 61.865 0 61.865 61.865 0 0 0 0-107.15 61.875 61.875 0 0 0-61.865 0 61.867 61.867 0 0 0-30.929 53.575z m0 0"
                fill="red"
                p-id="11178"
              />
              <path
                d="M370.715 295.68c-29.272 0-52.983-23.706-52.983-52.978V127.858c0-29.272 23.711-52.983 52.983-52.983s52.983 23.711 52.983 52.983v114.844c0 29.172-23.711 52.978-52.983 52.978z m0 0M644.404 295.68c-29.272 0-52.978-23.706-52.978-52.978V127.858c0-29.272 23.706-52.983 52.978-52.983s52.984 23.711 52.984 52.983v114.844c0 29.172-23.713 52.978-52.984 52.978z m0 0"
                fill="red"
                p-id="11179"
              />
              <path
                d="M380.667 747.631V583.843h-58.243v-39.711h5.118c21.767 0 37.946-3.646 48.536-10.943 10.589-7.294 16.59-18.943 18.002-34.946h49.595v249.388h-63.008zM519.039 638.557l17.826-140.667h155.669v49.772h-113.84l-6.53 48.889c5.529-5.648 12.324-9.884 20.385-12.708 8.058-2.824 17.443-4.236 28.151-4.236 24.71 0 44.447 7.62 59.214 22.856 14.765 15.24 22.15 35.682 22.15 61.332 0 28.239-8.913 50.42-26.739 66.539-17.826 16.122-42.331 24.18-73.51 24.18-28.005 0-49.802-6.619-65.391-19.856-15.592-13.237-24.268-32.387-26.033-57.449h61.067c0.587 9.062 3.676 16.122 9.266 21.179 5.587 5.061 13.088 7.59 22.503 7.59 11.295 0 19.914-3.381 25.857-10.148 5.94-6.765 8.913-16.618 8.913-29.563 0-12.823-2.854-22.826-8.56-30.004-5.709-7.176-13.678-10.767-23.915-10.767-7.06 0-13.149 1.266-18.268 3.795-5.118 2.532-9.503 6.442-13.149 11.737l-55.066-2.471z"
                fill="red"
                p-id="11180"
              />
              <path
                d="M740.166 381.34c0 9.942-8.06 18.002-18.002 18.002h-419.84c-9.942 0-18.002-8.06-18.002-18.002 0-9.942 8.06-18.002 18.002-18.002h419.84c9.942 0 18.002 8.059 18.002 18.002z"
                fill="red"
                p-id="11181"
              />
            </svg>
            <p>{{new Date().getDate()}}</p>
            <span>Hi,等你好久了，欢迎来到起点读书</span>
          </div>
          <div class="book_shelf">
            <bookList :recommendList="bookLists" :readingList="bookListReading">
            </bookList> 
             <div class="cover" v-show="bookLists.length==0&&bookListReading.length == 0" :style="{
            'z-index':9
          }">
          <van-loading v-show="!fail" style="text-align:center;margin-top:30vh" color="#000" />
          <p v-show="fail" class="fail"><span>{{fail}}</span><svg @click="refresh" t="1644628130718" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2073" width="200" height="200"><path d="M684.032 403.456q-17.408-8.192-15.872-22.016t11.776-22.016q3.072-2.048 19.968-15.872t41.472-33.28q-43.008-49.152-102.4-77.312t-129.024-28.16q-64.512 0-120.832 24.064t-98.304 66.048-66.048 98.304-24.064 120.832q0 63.488 24.064 119.808t66.048 98.304 98.304 66.048 120.832 24.064q53.248 0 100.864-16.896t87.04-47.616 67.584-72.192 41.472-90.624q7.168-23.552 26.624-38.912t46.08-15.36q31.744 0 53.76 22.528t22.016 53.248q0 14.336-5.12 27.648-21.504 71.68-63.488 132.096t-99.84 103.936-128.512 68.096-148.48 24.576q-95.232 0-179.2-35.84t-145.92-98.304-98.304-145.92-36.352-178.688 36.352-179.2 98.304-145.92 145.92-98.304 179.2-36.352q105.472 0 195.584 43.52t153.6 118.272q23.552-17.408 39.424-30.208t19.968-15.872q6.144-5.12 13.312-7.68t13.312 0 10.752 10.752 6.656 24.576q1.024 9.216 2.048 31.232t2.048 51.2 1.024 60.416-1.024 58.88q-1.024 34.816-16.384 50.176-8.192 8.192-24.576 9.216t-34.816-3.072q-27.648-6.144-60.928-13.312t-63.488-14.848-53.248-14.336-29.184-9.728z" p-id="2074"></path></svg></p>
        </div>
            
          </div>
        </div>
      </div>
    </van-pull-refresh>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component"; // @ is an alias to /src
import { defineComponent, ref, Ref, getCurrentInstance, onUpdated } from "vue";
import bookList from "../../components/BookList/index.vue";
export default defineComponent({
  components: {
    bookList
  },
  setup() {
    onUpdated(() => {
      console.log(1);
    });
    const isLoading = ref(false);
    let bookLists = ref([]);
    let bookListReading = ref([]);
    let CurrentInstance = getCurrentInstance();
    let http =
      CurrentInstance &&
      CurrentInstance.appContext &&
      CurrentInstance.appContext.config &&
      CurrentInstance.appContext.config.globalProperties;
    const onRefresh = () => {
      getDate();
    };
    const fail = ref("");
    const getDate = () => {
      http &&
        http.$get &&
        http
          .$get("/getBookshelfRecommend", "", {
            headers: {
              "Cache-Control": "no-cache"
            }
          })
          .then(e => {
            isLoading.value = false;
            let recommand = e.filter(ele => {
              return ele.type === "1";
            });
            let reading = e.filter(ele => {
              return ele.type === "2";
            });
            bookLists.value = recommand;
            bookListReading.value = reading;
          }).catch((e)=>{
            console.log(e);
            
             isLoading.value = false;
             fail.value = "网络错误！"
             console.log(fail);
            //  if(fail){
            //    alert(12)
            //  }
             
          });


    };

    let refresh=()=>{
      onRefresh()
    }
    getDate();
    return {
      bookLists,
      bookListReading,
      isLoading,
      refresh,
      onRefresh,
fail,
      getDate
    };
  }
});
</script>
<style scoped>
.home {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
header {
  background: url("../../assets/image/IMG_20220201_154900.jpg") no-repeat;
  width: 100%;
  background-size: cover;
  height: 170px;
}
.content {
  top: 80px;
  width: 100%;
}
.van-pull-refresh {
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
}
.header_top {
  position: absolute;
  left: 0;
  top: 0;
  box-sizing: border-box;
  width: 100%;
  height: 70px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}
.icon {
  width: 20px;
  height: 20px;
  margin: 0 1.7vw;
}
.header_content {
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 18px;
}
.header_content .icon {
  margin: 0 1vw;
  width: 15px;
  object-fit: contain;
}
.header_search {
  flex: 1;
  margin: 0 0.5vw;
  background: #fff;
  border-radius: 26px;
  height: 26px;
}
.hello {
  position: relative;
  padding: 0 10px;
  color: #fff;
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-bottom: 20px;
}
.hello .icon {
  margin: 0;
  margin-right: 10px;
}
.hello p {
  position: absolute;
  left: 16px;
  top: 4px;

  font-size: 12px;
}
.book_shelf {
  background: #fff;
  border-radius: 10px 10px 0 0;
  padding: 10px;
}
.van-loading {
  line-height: 20px;
}
.fail{
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>