import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { DatArticle } from '../../models/article.model';
import {MatDialog} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.css']
})
export class ListArticlesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'version', 'clave', 'nombre','categoria','precios','activo'];
  dataSource:DatArticle[]=[];
  constructor( private articleService:ArticleService,private router:Router) { }

  ngOnInit(): void {
    //this.articleService.createArticle().subscribe( d=>console.log(d))
    this.loadArticles()
  }
  addNew(){
    this.router.navigate(['/article/new-article'])
  }
  loadArticles(){
    this.articleService.getAllArticles().subscribe( d => this.dataSource = d.data)
  }
  delete(id:number){
    this.articleService.deleteById(id).subscribe(  r => this.loadArticles())
  }
}
