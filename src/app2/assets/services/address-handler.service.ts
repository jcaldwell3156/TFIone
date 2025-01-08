import { Injectable } from '@angular/core';
import { ITFIAddress } from '../models/ITFIAddress';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressHandlerService {
  apiUrl = 'api/address/';
  constructor(private http:HttpClient) { }
  getCounty(address:ITFIAddress){
    this.http.get<ITFIAddress>(this.apiUrl+'county/'+address.ZipCode);
    address.County='Hoxley'; 
  }



  getAddress(id: string): Observable<ITFIAddress | undefined> {
    return this.http.get<ITFIAddress>(this.apiUrl+'${id}');
  }

  saveAddress(address:ITFIAddress){
    const headers = { headers: { 'Content-Type': 'application/json' } };
    this.getCounty(address);
   let payLoad = JSON.stringify(address);
   if (!address.ID || address.ID === 0) {
     return this.http.post<ITFIAddress>(this.apiUrl,payLoad,headers).subscribe(data=>{
      data.ID = 11;
    }); 
  }else{

    return this.http.put<ITFIAddress>(this.apiUrl,payLoad, headers)
  }

  
  }


  }
