import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FinancialService {
val:any;
  constructor(private http: HttpClient) { }

  post(data:any){
   
    return this.http.post<any>('http://localhost:3000/data', data)
  }
  get(){
  return this.http.get<any>("http://localhost:3000/data/")
  }
  
}
