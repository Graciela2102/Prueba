
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { Categoria, category } from 'src/app/article/models/article.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) {

  }
  /* createCategory():Observable<any>{
    let body = {
      "clave":"C01",
      "fechaCreado":1569364107680,
      "nombre":"Computadoras"
      }
    return this.http.post( `${environment.host}/categoria`,body)
  } */
  createCategory(body:any):Observable<any>{

    return this.http.post( `${environment.host}/categoria`,body)
  }
  getAllCategory():Observable<category>{
    return this.http.get<category>( `${environment.host}/categoria`)
  }

  deleteById(id:any){
    return this.http.delete<any>( `${environment.host}/categoria/${id}`)
  }
  getCategoryById(id:any){
    return this.http.get<any>( `${environment.host}/categoria/${id}`)

  }
}


