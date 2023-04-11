import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Article, DatArticle } from '../models/article.model';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http:HttpClient) {


  }
  createArticle(body:any):Observable<any>{

    return this.http.post( `${environment.host}/articulo`,body)
  }
  getAllArticles():Observable<Article>{
    return this.http.get<Article>( `${environment.host}/articulo`)
  }
  deleteById(id:any){
    return this.http.delete<any>( `${environment.host}/articulo/${id}`)
  }
  getArticleById(id:any){
    return this.http.get<any>( `${environment.host}/articulo/${id}`)
  }
  EditArticle(id:any):Observable<any>{

    return this.http.patch( `${environment.host}/articulo/`,id)
  }

}
