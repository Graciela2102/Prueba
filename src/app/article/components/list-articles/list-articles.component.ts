import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { DatArticle } from '../../models/article.model';
import {MatDialog} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { Router } from '@angular/router';
import { CreateArticleComponent } from '../create-article/create-article.component';
import { DialogDeleteComponent } from 'src/app/directive/dialog-delete/dialog-delete.component';
import { timeInterval } from 'rxjs';
@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.css']
})
export class ListArticlesComponent implements OnInit {
  //displayedColumns: string[] = ['id', 'version', 'clave', 'nombre','categoria','precios','activo'];
  dataSource:DatArticle[]=[];
  constructor( private articleService:ArticleService,private router:Router,public dialog: MatDialog) { }
  openDialog() {
    const dialogRef = this.dialog.open(CreateArticleComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.loadArticles();
    });
  }

  openDialogUpdate(id:any) {
    const dialogRef = this.dialog.open(CreateArticleComponent,{data:{id:id,action:"UPDATE"}});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);


    });
  }
   openDialogDelete(id:any) {
    const dialogRef = this.dialog.open(DialogDeleteComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.delete(id);
    });
  }
  ngOnInit(): void {
    //this.articleService.createArticle().subscribe( d=>console.log(d))
    this.loadArticles()
  }

  loadArticles(){
    this.articleService.getAllArticles().subscribe( d => this.dataSource = d.data)
  }
  delete(id:number){
    this.articleService.deleteById(id).subscribe(  r => this.loadArticles())
  }
}
