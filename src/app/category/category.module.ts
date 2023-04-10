import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCategoriesComponent } from './components/list-categories/list-categories.component';
import { CategoryRoutingModule } from './category-routing.module';



@NgModule({
  declarations: [
    ListCategoriesComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule
  ]
})
export class CategoryModule { }
