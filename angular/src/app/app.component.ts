import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {
  constructor(){

  }
  title = 'angular-qiandian';
  curIndex = 0 ;
   switchs(e: any): void{
     console.log(e);
     this.curIndex = Number(e) ;
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}