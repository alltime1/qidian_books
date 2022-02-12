import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.styl']
})
export class BookshelfComponent implements OnInit {

  constructor() { }
  scrollLong = 0;
  bookList = [
    {
      icon: 'https://bookcover.yuewen.com/qdbimg/349573/1018036750/90',
      name: '修真从穿越三年开',
      author: '行为金融',
      status:"0",
      newRead: '100',
      title: '第四百二十四章 心愿'
    },
    {
      status:"0",
      icon: 'https://bookcover.yuewen.com/qdbimg/349573/1018036750/90',
      name: '修真从穿越三年开',
      author: '行为金融',
      newRead: '100',
      title: '第四百二十四章 心愿'
    },
    {
      status:"0",
      icon: 'https://bookcover.yuewen.com/qdbimg/349573/1018036750/90',
      name: '修真从穿越三年开',
      author: '行为金融',
      newRead: '100',
      title: '第四百二十四章 心愿'
    },
    {
      status:"0",
      icon: 'https://bookcover.yuewen.com/qdbimg/349573/1018036750/90',
      name: '修真从穿越三年开',
      author: '行为金融',
      newRead: '100',
      title: '第四百二十四章 心愿'
    },
    {
      status:"0",
      icon: 'https://bookcover.yuewen.com/qdbimg/349573/1018036750/90',
      name: '修真从穿越三年开',
      author: '行为金融',
      newRead: '100',
      title: '第四百二十四章 心愿'
    }, {
      status:"0",
      icon: 'https://bookcover.yuewen.com/qdbimg/349573/1018036750/90',
      name: '修真从穿越三年开',
      author: '行为金融',
      newRead: '100',
      title: '第四百二十四章 心愿'
    }, {
      status:"0",
      icon: 'https://bookcover.yuewen.com/qdbimg/349573/1018036750/90',
      name: '修真从穿越三年开',
      author: '行为金融',
      newRead: '100',
      title: '第四百二十四章 心愿'
    }, {
      status:"0",
      icon: 'https://bookcover.yuewen.com/qdbimg/349573/1018036750/90',
      name: '修真从穿越三年开',
      author: '行为金融',
      newRead: '100',
      title: '第四百二十四章 心愿'
    },
    {
      status:"0",
      icon: 'https://bookcover.yuewen.com/qdbimg/349573/1018036750/90',
      name: '修真从穿越三年开',
      author: '行为金融',
      newRead: '100',
      title: '第四百二十四章 心愿'
    }
  ];
  now = new Date().getDate();
  flagStart = false;
  startPosiY = 0;
  time = null;
  isLoading = false; //加载中
  getData(): void {//获取数据
    setTimeout(() => {
      this.isLoading = false;//加载完成
      this.scrollLong = 0;
      this.time = null;
    }, 1000);
  }
  touchStart(e): void {
    this.isLoading = false;
    console.log(e);
    this.flagStart = true;
    this.startPosiY = e.screenY;
  }

  touchMove(e): void {
    if (this.scrollLong >= 0 && this.scrollLong <= 140) {
      if (this.flagStart && !this.time) {
        this.time = setTimeout(() => {
          this.scrollLong = Math.pow(e.screenY - this.startPosiY, .9);
          this.time = null;
        }, 100);

      }
    }

  }
  touchEnd(e): void {
    console.log(this.scrollLong);
    if (this.time) {
      clearTimeout(this.time);
    }
    this.flagStart = false;
    if (this.scrollLong > 100) {
      this.scrollLong = 100;
      this.isLoading = true;
      this.getData();
    } else {
      this.scrollLong = 0;
    }

  }
  ngOnInit(): void {
  }

}
