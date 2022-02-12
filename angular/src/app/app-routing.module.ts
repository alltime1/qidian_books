import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookshelfComponent } from './main/bookshelf/bookshelf.component';
import {ChoiceComponent} from './main/choice/choice.component';
const routes: Routes = [
  {
    path: '', component: BookshelfComponent,
  }, {
    path: 'choice', component: ChoiceComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
