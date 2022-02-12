import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.styl']
})
export class ChoiceComponent implements OnInit {

  constructor() {

  }
  lijianData = [
    {
      zbSay: '随着逐渐长大，你是否有过感叹为啥一加一等于二，为什么会有为什么。。。等随着逐渐长大，你是否有过感叹为啥一加一等于二，为什么会有为什么。。。等',
      name: '这是神马黑科技',
      typeName: '科幻',
      wordNum: '30万',
      littleType: '时空文,轻松',
      icon: 'https://bookcover.yuewen.com/qdbimg/349573/1030148290/90'
    },
    {
      zbSay: '第二个',
      name: '随着逐渐长大，你是否有过感叹为啥一加一等于二，为什么',
      typeName: '科幻',
      wordNum: '30万',
      littleType: '时空文,轻松',
      icon: 'https://bookcover.yuewen.com/qdbimg/349573/1032561786/90'
    },
    {
      zbSay: '第二个',
      name: '随着逐渐长大，你是否有过感叹为啥一加一等于二，为什么',
      typeName: '科幻',
      wordNum: '30万',
      littleType: '时空文,轻松',
      icon: 'https://bookcover.yuewen.com/qdbimg/349573/1032561786/91'
    },
    {
      zbSay: '第二个',
      name: '随着逐渐长大，你是否有过感叹为啥一加一等于二，为什么',
      typeName: '科幻',
      wordNum: '30万',
      littleType: '时空文,轻松',
      icon: 'https://bookcover.yuewen.com/qdbimg/349573/1030148290/90'
    },
    {
      zbSay: '第二个',
      name: '随着逐渐长大，你是否有过感叹为啥一加一等于二，为什么',
      typeName: '科幻',
      wordNum: '30万',
      littleType: '时空文,轻松',
      icon: 'https://bookcover.yuewen.com/qdbimg/349573/1032680642/90'
    }
    ,
    {
      zbSay: '第二个',
      name: '随着逐渐长大，你是否有过感叹为啥一加一等于二，为什么',
      typeName: '科幻',
      wordNum: '30万',
      littleType: '时空文,轻松',
      icon: 'https://bookcover.yuewen.com/qdbimg/349573/1032680642/90'
    }
  ];
  chooseList = ['男生', '女生', '胶囊', '漫画', '听书'];
  choiceList = [
    {
      til: '畅想精选',
      data: [
        {
          icon: "https://bookcover.yuewen.com/qdbimg/349573/1018036750/90",
          name: "被动之王",
          introduce: "游戏刷子，用被动技能吊打各路大佬",
          typeName: "虚拟网游",
          wordNum: "158万",
          littleType: "无敌,无敌流,轻松"
        },
        {
          icon: "https://bookcover.yuewen.com/qdbimg/349573/1018036750/90",
          name: "被动之王",
          introduce: "游戏刷子，用被动技能吊打各路大佬",
          typeName: "虚拟网游",
          wordNum: "158万",
          littleType: "无敌,无敌流,轻松"
        },
        {
          icon: "https://bookcover.yuewen.com/qdbimg/349573/1018036750/90",
          name: "被动之王",
          introduce: "游戏刷子，用被动技能吊打各路大佬",
          typeName: "虚拟网游",
          wordNum: "158万",
          littleType: "无敌,无敌流,轻松"
        }
      ]
    }
  ];
  classifyList = [
    {
      icon: 'http://1.116.252.29/classify_1.png',
      name: '分类',
    },
    {
      icon: 'http://1.116.252.29/classify_2.png',
      name: '排行',
    },
    {
      icon: 'http://1.116.252.29/classify_2.png',
      name: '三江',
    },
    {
      icon: 'http://1.116.252.29/classify_3.png',
      name: '剧场',
    },
    {
      icon: 'http://1.116.252.29/classify_4.png',
      name: '免费',
    },
    {
      icon: 'http://1.116.252.29/classify_1.png',
      name: '完本',
    },
  ];
  curItem = '男生';
  lijianDataIndex = 0;
  allIconLijian = [];
  getOtherPosiIcon(): void {
    const oldArr = [];
    this.lijianData.forEach((e, index) => {
      if (index > this.lijianDataIndex) {
        oldArr.push(e.icon);
      } else if (index < this.lijianDataIndex) {
        this.allIconLijian.push(e.icon);
      }
    });
    this.allIconLijian = [...oldArr, ...this.allIconLijian].reverse();
  }
  ngOnInit(): void {
    this.getOtherPosiIcon();
    setInterval((): void => {
      console.log(this.lijianDataIndex);
      this.allIconLijian = [];
      if (this.lijianDataIndex < this.lijianData.length - 1) {
        this.lijianDataIndex += 1;
        this.getOtherPosiIcon();
        return;
      }
      this.lijianDataIndex = 0;
      this.getOtherPosiIcon();
    }, 1500);
  }

}
