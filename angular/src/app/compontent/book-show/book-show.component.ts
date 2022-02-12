import { Component, OnInit } from '@angular/core';
import {Input} from "@angular/core"
@Component({
  selector: 'app-book-show',
  templateUrl: './book-show.component.html',
  styleUrls: ['./book-show.component.styl']
})
export class BookShowComponent implements OnInit {

  constructor() { }
 @Input() booksList: any ;
  ngOnInit(): void {

  }

}
