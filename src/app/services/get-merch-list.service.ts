import { Injectable } from '@angular/core';
import { Merch } from '../models/merch';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

let url = "http://localhost:8080/merch/merchList";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
  // should token be passed?
};

@Injectable({
  providedIn: 'root'
})
export class GetMerchListService {
  [x: string]: any;

  constructor(private http: HttpClient) { }

  getMerchList() {
    return this.http.get(url, httpOptions);
  }
}
