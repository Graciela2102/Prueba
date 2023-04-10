import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListArticlesComponent } from './components/list-articles/list-articles.component';
import { CreateArticleComponent } from './components/create-article/create-article.component';

const routes: Routes = [
{
  path:"",
  component:ListArticlesComponent
},
{
  path:"new-article",
  component:CreateArticleComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
