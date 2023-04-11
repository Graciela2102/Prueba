import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCategoriesComponent } from './components/list-categories/list-categories.component';
import { CreateCategoryComponent } from './components/create-category/create-category.component';

const routes: Routes = [

{
  path:"",
  component:ListCategoriesComponent
},
{
  path:"new-category",
  component:CreateCategoryComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
