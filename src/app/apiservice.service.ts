import { Injectable } from '@angular/core';
import{HttpClient}from'@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(public http:HttpClient) { }
  getcategory(){
    let response=this.http.get('http://myvillagemart.com/api/test/testlist');
    return response;
  }

}
