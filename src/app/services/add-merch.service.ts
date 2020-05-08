import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Merch} from '../models/merch';

//TODO: move this URL to a separate file
let url = "http://localhost:8080/merch/add";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AddMerchService {

  

  constructor(private http: HttpClient) { }

  // Sends a newly created merch item to the backend
  sendMerch(merch:Merch) {
    return this.http.post(url, JSON.stringify(merch),  
     httpOptions);
  }
}
