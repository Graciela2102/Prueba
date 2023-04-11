import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';
@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {
  formGroup:any ;
  post:any;
  constructor(private formBuilder: FormBuilder,private route:Router,private CategoriaService:CategoryService,@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    console.log(this.data)
    if(this.data.action=="UPDATE"){
      this.CategoriaService.getCategoryById(this.data.id).subscribe(d => {
        this.formGroup.get("clave").setValue(d.clave);
        this.formGroup.get("fechaCreado").setValue(d.fechaCreado);
        this.formGroup.get("nombre").setValue(d.nombre);

      })
    }
    this.formGroup = new FormGroup({
      'clave':new FormControl(null,[Validators.required]),
      'fechaCreado':new FormControl(null,[Validators.required]),
      'nombre':new FormControl(null,[Validators.required]),
      'activo':new FormControl(true,[])
    });
   // this.formBuilder.group(this.formGroup)
  }
  getErrorClave() {
    return this.formGroup.get('clave').hasError('required') ? 'Campo requerido':''
      //this.formGroup.get('email').hasError('email') ? 'Not a valid email address' : '';
  }
  getErrorfechaCreado(){
    return this.formGroup.get('fechaCreado').hasError('required') ? 'Campo requerido':''
  }
  getErrorNombre(){
    return this.formGroup.get('nombre').hasError('required') ? 'Campo requerido':''
  }
  onSubmit(post:any) {
    let value = this.formGroup.value;
    this.CategoriaService.createCategory(value).subscribe(c => this.route.navigate(['/category']))
  }

}
