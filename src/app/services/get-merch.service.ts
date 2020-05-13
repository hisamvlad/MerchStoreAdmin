import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

let url = "http://localhost:8080/merch/";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
  // should token be passed?
};

@Injectable({
  providedIn: 'root'
})
export class GetMerchService {

  constructor(private http: HttpClient) { }
  
  getMerch(id:number) {
    let fullUrl = url + id;
    return this.http.get(fullUrl, httpOptions);
  }
}
