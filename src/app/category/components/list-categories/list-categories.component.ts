import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit {

  constructor( private categoryService:CategoryService) { }

  ngOnInit(): void {
    //this.categoryService.createCategory().subscribe( c=>console.log(c))
  }

}
