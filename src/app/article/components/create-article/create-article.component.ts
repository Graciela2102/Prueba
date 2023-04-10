import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ArticleService } from '../../services/article.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
  formGroup:any ;
  post:any;
  constructor(private formBuilder: FormBuilder,private articulosService:ArticleService,private route:Router) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      'clave':new FormControl(null,[Validators.required]),
      'categoria':new FormControl(null,[Validators.required]),
      'nombre':new FormControl(null,[Validators.required]),
      'precios':new FormControl([{"precio":1300},{"precio":1400}],[]),
      'activo':new FormControl(true,[])
    });
   // this.formBuilder.group(this.formGroup)
  }
  getErrorEmail() {
    return this.formGroup.get('clave').hasError('required') ? 'Campo requerido':''
      //this.formGroup.get('email').hasError('email') ? 'Not a valid email address' : '';
  }
  getErrorCategoria(){
    return this.formGroup.get('categoria').hasError('required') ? 'Campo requerido':''
  }
  getErrorNombre(){
    return this.formGroup.get('nombre').hasError('required') ? 'Campo requerido':''
  }

  onSubmit(post:any) {
    let value = this.formGroup.value;
    this.articulosService.createArticle(value).subscribe(c => this.route.navigate(['/article']))
  }

}
