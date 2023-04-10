
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) {

  }
  createCategory():Observable<any>{
    let body = {
      "clave":"C01",
      "fechaCreado":1569364107680,
      "nombre":"Computadoras"
      }
    return this.http.post( `${environment.host}/categoria`,body)
  }
}
