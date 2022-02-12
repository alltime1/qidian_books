import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './compontent/nav-bar/nav-bar.component';
import { MainComponent } from './main/main.component';
import { BookshelfComponent } from './main/bookshelf/bookshelf.component';
import { BookShowComponent } from './compontent/book-show/book-show.component';
import { ChoiceComponent } from './main/choice/choice.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainComponent,
    BookshelfComponent,
    BookShowComponent,
    ChoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, BookshelfComponent, BookShowComponent]
})
export class AppModule { }
