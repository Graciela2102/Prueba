import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { DatArticle } from 'src/app/article/models/article.model';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/article/models/article.model';
import { MatDialog } from '@angular/material/dialog';

import { CreateCategoryComponent } from '../create-category/create-category.component';
import { ThisReceiver } from '@angular/compiler';
import { DialogDeleteComponent } from 'src/app/directive/dialog-delete/dialog-delete.component';
@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit {
  displayedColumns: string[] = ['id','clave','fechaCreado','nombre','activo'];
  dataSource:Categoria[]=[];
  constructor( private categoryService:CategoryService,private router:Router,public dialog: MatDialog) { }

  ngOnInit(): void {
    //this.categoryService.createCategory().subscribe( c=>console.log(c))
    this.loadCategory()
  }
  openDialog() {

    const dialogRef = this.dialog.open(CreateCategoryComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
       this.loadCategory();
    });
  }

  openDialogUpdate(id:any) {
    const dialogRef = this.dialog.open(CreateCategoryComponent,{data:{id:id,action:"UPDATE"}});

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

  loadCategory(){
    this.categoryService.getAllCategory().subscribe( d => this.dataSource = d.data)
  }

  delete(id:number){
    this.categoryService.deleteById(id).subscribe(  r => this.loadCategory())
  }
}
