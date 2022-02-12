<template>
  <div class="all">
    <div class="oneBook"  v-for="(item,index)  in  readingList" :key="'book'+index">
      <div class="posi">
        <img :src="item.icon" alt />
      </div>
      <svg
        t="1644380879220"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="6737"
        width="200"
        fill="#000"
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
      <div class="detail">
        <p class="hiddenLine">{{item.name}}</p>
        <span class="hiddenLine">
          {{item.author}} ·
          <span v-show="item.unread>0">{{item.unread}}章未读</span>
          <span v-show="item.unread<=0">已读至最新章节</span>
        </span>
        <span class="looking hiddenLine">{{item.status==0?"完本":"连载"}} · {{item.newChapter}}</span>
      </div>
    </div>
    <div class="oneBook" v-for="(item,index)  in  recommendList" :key="'book'+index">
      <div class="posi">
        <img :src="item.icon" alt />
        <p>推荐</p>
      </div>
      <svg
        t="1644380879220"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="6737"
        width="200"
        fill="#000"
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
      <div class="detail">
        <p class="hiddenLine">{{item.name}}</p>
        <span class="hiddenLine">{{item.author}}</span>
        <span class="hiddenLine">{{item.recommend}}</span>
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
  toRef,
  withDefaults
} from "vue";
import { useRouter } from 'vue-router';
export default defineComponent({
  props: {
    recommendList: {
      default: [],
      type: Array
    },
    readingList: {
      default: [],
      type: Array
    }
  },
  
  setup() {
    let router = useRouter();
    const enterBook = () =>{
      router.push("/detail")
  }
    return{
       enterBook
    }
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
  width: 14vw;
  object-fit: contain;
}
.posi {
  position: relative;
  width: 14vw;
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
  font-size: 12px;
  /* white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
    display: -webkit-box; */
}
.detail span:nth-child(3) {
  display: block;
  color: rgb(255, 238, 0);
}
.oneBook .detail .looking {
  color: rgb(114, 114, 114);
}
.hiddenLine {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 74vw;
}
.icon {
  position: absolute;
  right: 0.2vw;
  top: 0.3vw;
  height: auto;
  width: 5vw;
}
</style>
