<template>
  <div
    class="book"
    @touchmove="handlerTouchmove"
    @touchend="handlerTouchend"
    @touchstart="handlerTouchstart"
  >
    <div
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
      <div v-if="index == 0" class="titles">正文卷 第一章 开局就要被杀</div>
      <span v-html="item" style="display:block"></span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, Ref } from "vue";
export default defineComponent({
  name: "Reading",
  setup(props) {
    let word = `
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;“小佑...你回来了...？”
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;一座古色古香的村庄前，李佑拖着一个黑色的行李箱慢悠悠的走在小道上，路上的村人看到李佑之后，纷纷都对李佑打上了招呼。
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;李佑也全部都是恭敬的回礼。
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;等走回自己家的祖宅前，李佑微微的叹了一口气，最终还是走到了这一步，不得不回来啃老，要知道就在一天前，李佑还是一家公司的职员，过着朝九晚五的打工人生活。
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;本来这样的生活，李佑是打算过到死的，可是谁知道，计划赶不上变化，自己公司的那位好色经理，居然对一位实习生动手动脚。
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;别人或许能忍，但是李佑却忍不了，跟着一拳揍了上去，结果是显而易见的，李佑被开除了，至于那位被动手动脚的女生，也是离开了那家公司。
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;失业的李佑重新找了很长时间的工作，但是一直都被那位被自己打的经理在后面做小动作，以至于无人敢用李佑，没办法，李佑只要准备自己做自己的老板，个人开一家公司。
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;只是想要自己开公司，本钱还是需要的，李佑工作了十年...攒了十万块，和开公司的钱差距太大了，不过，好在李佑爷爷在去世的时候告诉李佑。
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;如果有一天需要钱了，就自己回老宅，在老宅阁楼上西面墙上数第十三块砖，跟着是下面第五块，用力撬开，里面就有李佑需要的东西。
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;.........................
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;“一个盒子...！”
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;李佑按照自己爷爷交待的，从墙中掏出一个红木盒子，盒子古朴古色，只是盒子很轻，当李佑打开之后，李佑发现盒子之中只有一枚古朴的戒指。
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;戒指的戒圈是两条龙，然后两条龙口相对吐出，一颗浑圆的绿色戒珠被镶嵌在上面。
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;李佑好奇的将戒指给拿了起来，跟着有些无语的发现，这戒指的戒圈好像是银的，而上面的戒珠则是完全不知名的一种材料制成。
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;不是珍珠，不是钻石...李佑有些无语了，这玩意真的能值钱，是不是自己被爷爷给忽悠了？
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;李佑顺手将戒指给带在了无名指上，跟着发现戒指的戒珠上有些脏，顺手就用手擦了两下，只是这一擦不要紧，李佑瞬间感觉自己的身边好像扭曲了一样，出现了一道一道波浪的纹路。
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;李佑一个慌张，这是什么情况呀...难道是自己昨晚没有睡好，想到这里，李佑就使劲的闭了闭眼睛，只是这眼睛一闭，等李佑再次睁开的时候，李佑发现自己身处地方改变了。
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;这里已经不是自己老宅家的阁楼了。
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;缓缓睁开眼睛，映入眼帘的竟是粉黄色的帐幔，暮色微凉。
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;头顶是一袭一袭的流苏，随风轻摇。不适的动了动，却发现身下的床榻冰冷坚硬，即使那繁复华美的云罗绸如水色荡漾的铺于身下，总是柔软却也单薄无比。不时飘来一阵紫檀香，幽静美好。
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;榻边便是窗，精致的雕工，稀有的木质。窗外一片旖旎之景，假山，小池，碧色荷藕，粉色水莲。不时有小婢穿过，脚步声却极轻，谈话声也极轻。
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;忽然，李佑的耳边响起了呜...呜...的声音，李佑转头一看，直接被吓了一跳。
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;“我靠...这是什么玩意？”
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;等李佑定下心一看，这才发现自己的身边居然还有一位被五花大绑的青涩少女，少女顶多十四岁左右，此时正一脸怒视的看着李佑。
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;那眼神就好像准备要将李佑给吃了，幸好少女的嘴是被麻布封住的，要不然李佑都怀疑自己已经被少女给咬死了。
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;“你谁呀...？”李佑有些不知所措的看向了少女。
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;“呜...呜...呜...！”少女发出呜...呜的声音对李佑怒目而视，
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;“哦...！”李佑点点头：“你嘴被封着，那个...我和你说一下，我不是什么坏人...我可以将你的嘴封给拿掉，但是你要保证不伤害我...只要你不伤害我，那我们什么都好说，你要是伤害我，就别怪我无情了。
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;知道了没有，如果知道你就眨眨眼睛，如果不知道...！”
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;“额...不知道怎么办呀？”李佑一愣。
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;不过好在，这位少女还不傻一直都在眨眼睛，看样子是很想李佑将她给松开。
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;“好...好...！”李佑笑着道：“你也别着急，我这就帮你...！”说着，李佑就准备将少年身上的绳子给松开。
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;可是就在这个时候，忽然，房间的大门被猛的一下推开，跟着从外面冲进来一位小内侍害怕的喊道：“大王不好了，大王不好了，权万纪要回长安告发你了。”
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;“蛤...！”此时的李佑还没有反应过来，看着突然闯进来的小内侍问道：“你谁呀，叫谁大王，谁是大王呀？”
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;小内侍被李佑问的一愣，跟着露出了不解的表情看着李佑道：“大王，奴婢是在喊您呀，您是齐王，齐州的大王呀...！”
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;“我是齐王，齐州的大王...？”李佑是越听越感觉不对劲，要知道这齐州的大王李佑可是知道一位，不是别人正是和自己同名同姓的家伙。
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;而这个和自己一样叫李佑的家伙可不是什么好人，乃是大唐皇帝的第五子李佑，母为阴妃。
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;武德八年，封为宜阳王。玄武门之变后，封为楚王。贞观二年，授幽州都督、燕王。贞观十年，封齐州都督、齐王。
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;贞观十七年（643年），举兵谋反，事败被擒，废为庶人，赐死于内侍省，以国公之礼入葬。
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;“今年是哪一年？”
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;“大王...您可别吓奴婢呀，今年是贞观十七年...！”
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;“贞观十七年...！”李佑一个苦涩，跟着看着那位小内侍道：“你别告诉我...我是大唐皇帝陛下第五子，齐州大都督，齐王佑...？”
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;看着李佑那苦涩的眼神，小内侍心中也是怯怯的道：“没错...您就是齐州大王齐王佑。”
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;话刚说完，李佑恨不得一口鲜血直接喷出自己的口，这叫什么事情呀，自己怎么就变成了齐王李佑，更扯的是居然是变成的要造反前的李佑。
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;这完全是让自己死呀...为什么...为什么...为什么...！
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;李佑对着天空大声喊了三次，这三声呐喊直接将周围的人都给喊傻了，而那三声悲愤的呐喊，也是喊尽了李佑的心酸。
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;................................<br><br>`;
    const wordRef = ref(null);
    let allword: Ref<Array<string>> = ref([]);
    onMounted(() => {
      console.log(wordRef);
    });

    const cutChaper = word => {
      // word.split("").forEach(element => {
      //    console.log(element);

      // });
      let height2 = document.body.clientHeight - 40;
      let height = document.body.clientHeight - 40 - 49.6;
      let fontSize = 20;
      let biaojian = 10; //7.5的边距
      let width = document.body.clientWidth - 40; //减去padding的
      let nowWidth = 0; //每次添加内容 计算宽度
      let heightMax = 0; //最大高度
      let dotNum = 0; //·计算个数
      let onePageWord = "";
      let words = word.match(/[^x00-xff]|<br>/g);

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
      words.forEach(e => {
        changeWidth(e);
        if (nowWidth > width) {
          heightMax += (30 / 20) * fontSize;
          nowWidth = getWidth(e);
        }
        if (nowWidth == width) {
          heightMax += (30 / 20) * fontSize;
          nowWidth = 0;
        }
        if (heightMax > height) {
          allword.value.push(onePageWord.slice(0, -1));
          onePageWord = e;
          nowWidth = getWidth(e);
          height = height2;
          heightMax = getWidth(e) == 0 ? (30 / 20) * fontSize : 0;
          // getWidth

          // return;
        }
      });
    };
    const currentIndex: Ref<number> = ref(0);
    const touchLong = ref(0);
    let start = 0;
    const handlerTouchstart = e => {
      anima.value = false;
      start = e.targetTouches[0].pageX;
    };
    let time:ReturnType<typeof setTimeout>|number = 0;
    const handlerTouchmove = e => {
      if (time) {
        return;
      }
      time = setTimeout(() => {
     

        if (currentIndex.value == 0 && e.changedTouches[0].pageX - start > 0) {
          return;
        }
        touchLong.value = e.changedTouches[0].pageX - start;
        console.log(touchLong.value);

        if (touchLong.value > 0) {
          isBack.value = true;
        } else {
          isBack.value = false;
        }
        clearTimeout(time as ReturnType<typeof setTimeout>);
        time = 0;
      }, 20);
    };
    const anima = ref(false);
    const isBack = ref(false);
    const handlerTouchend = () => {
      let width = document.body.clientWidth;
      console.log(touchLong.value);
      //添加动画
      anima.value = true;

      if (Math.abs(touchLong.value) > 100) {
        if (touchLong.value > 0) {
          // setTimeout(() => {

          // }, 200);
          touchLong.value = width;
         let time = setTimeout(() => {
            currentIndex.value -= 1;
            anima.value = false;
            touchLong.value = 0;
            clearTimeout(time)
          }, 200);
        } else {
          // - you
          // setTimeout(() => {

          // }, 200);
          // currentIndex.value += 1;
          touchLong.value = -width;
          let time = setTimeout(() => {
            currentIndex.value += 1;
            anima.value = false;  
              touchLong.value = 0;
             clearTimeout(time)
        
          }, 200);
        }
      } else {
            let time = setTimeout(() => {

        touchLong.value = 0;
        clearTimeout(time)},100)
      }
    };
    cutChaper(word);
    return {
      word,
      allword,
      currentIndex,
      wordRef,
      handlerTouchstart,
      handlerTouchmove,
      handlerTouchend,
      touchLong,
      anima,
      isBack
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
</style>
