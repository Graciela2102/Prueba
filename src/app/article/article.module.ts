import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleRoutingModule } from './article-routing.module';

import { MatTableModule } from '@angular/material/table'
import {CdkTableModule} from '@angular/cdk/table';
//import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { BrowserModule } from '@angular/platform-browser';
import { ListArticlesComponent } from './components/list-articles/list-articles.component';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { CreateArticleComponent } from './components/create-article/create-article.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
@NgModule({
  declarations: [ListArticlesComponent, CreateArticleComponent],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    MaterialModule,
    ReactiveFormsModule
   // BrowserModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ArticleModule { }
