import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {Output} from '@angular/core';
import {EventEmitter} from '@angular/core';
interface ItemsInterface {
  icon: string;
  name: string;
}
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.styl']
})
export class NavBarComponent implements OnInit {
 
  constructor(private router: Router) { }
  currentIndex = 0;
  @Output() barIndex = new EventEmitter();
  items: ItemsInterface[];
  ngClick(e: number): void {
    this.currentIndex = e;
    this.barIndex.emit(String(this.currentIndex) );
    // if (e === 0) {
    //   this.router.navigate(['']);
    //   return;
    // }
    // this.router.navigate(['choice'])
  }
  ngOnInit(): void {
  }

}
