import { Injectable } from '@angular/core';
import { IAuthorizedSvc } from '../models/IAuthorizedSvc';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizedServicesService {

  constructor(private http: HttpClient) { }
  authorizedServicesAPIURL: string = "";
  authHeader: HttpHeaders = new HttpHeaders({Authorization: `bearer 123345687878`})
//GetAllAuthorizedServices
GetAllAuthorizedServices(): Observable<IAuthorizedSvc[]> {
  return this.http.get<any>(this.authorizedServicesAPIURL, {headers: this.authHeader})
  .pipe(
      map((response: any) => {
          return this.MapToAuthService(response);
      })
  );
}
//GetAllAuthorizedServices
GetAnAuthorizedServices(AuthSvcId:number): Observable<IAuthorizedSvc[]> {
  return this.http.get<IAuthorizedSvc>(this.authorizedServicesAPIURL+'/'+AuthSvcId, {headers: this.authHeader})
  .pipe(
      map((response: any) => {
          return this.MapToAuthService(response);
      })
  );
}

//GetAllAuthorizedServices for an Agency
  GetAllAuthorizedServicesForAgency(Agency:number): Observable<IAuthorizedSvc[]> {
    return this.http.get<any>(this.authorizedServicesAPIURL+'/Agency/'+Agency, {headers: this.authHeader})
    .pipe(
        map((response: any) => {
            return this.MapToAuthService(response);
        })
    );
  }

//SaveAllAuthorizedServicesFor an Agency
SaveAllAuthorizedServicesForAgency(authorizedServices:IAuthorizedSvc[]):number{
  let payload = JSON.stringify(authorizedServices);
  const response$ = this.http.post(this.authorizedServicesAPIURL,payload,{headers: this.authHeader});
  // response$.subscribe(response => (){
  //   return response;
  // });
  return 500;
}
  

//UpdateAnAuthorizedServiceFor an Agency
UpdateAnAuthorizedServicesForAgency(authorizedServices:IAuthorizedSvc[]):number{
  let payload = JSON.stringify(authorizedServices);
  const response$ = this.http.put(this.authorizedServicesAPIURL,payload,{headers: this.authHeader});
  // response$.subscribe(response => (){
  //   return response;
  // });
  return 500;
}


//Delete An Authorized Service for an Agency

//Get all Service Types
//Get all Procedure Codes for a Service Type
//Get all the unit types
MapToAuthService(responseToMap: any): IAuthorizedSvc[] {
    let serviceToReturn : IAuthorizedSvc[] = [];
    for (let i = 0; i < responseToMap.length; i++) {
      serviceToReturn[i] = {
        ServiceType: responseToMap[i].ServiceType,
        ProcedureCode: responseToMap[i].ProcedureCode,
        UnitType: responseToMap[i].UnitType,
        BeginDate: responseToMap[i].BeginDate,
        EndDate: responseToMap[i].EndDate,
        SendToAllProviders: responseToMap[i].SendToAllProviders

      }
    }
    return serviceToReturn;
  }
}
