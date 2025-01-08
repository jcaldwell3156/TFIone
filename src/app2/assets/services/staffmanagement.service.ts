import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { IStaffManagementStaff } from '../models/IStaffManagementStaff';

@Injectable({ providedIn: 'root' })
export class StaffManagementService {
  constructor(private http: HttpClient, private auth: AuthenticationService) {}

  staffManagementURLTest: string = "https://localhost:7153/api/StaffManagement/Staff";
  staffManagementURL: string = "https://tfiapi.azure-api.net/api/staffmanagement/Staff";
  authHeader: HttpHeaders = new HttpHeaders({Authorization: `bearer ${this.auth.GetToken()}`})

  GetListOfStaff(): Observable<IStaffManagementStaff[]> {
    return this.http.get<any>(this.staffManagementURL, {headers: this.authHeader}).pipe(
        map(response => {
            return this.MapToStaffManagement(response);
        })
    );
  }

  UpdateStaff(staffToUpdate: IStaffManagementStaff): Observable<IStaffManagementStaff> {
    return this.http.put<any>(this.staffManagementURL, staffToUpdate, {headers: this.authHeader});
  }


  MapToStaffManagement(responseToMap: any): IStaffManagementStaff[] {
    let staffToReturn : IStaffManagementStaff[] = [];
    for (let i = 0; i < responseToMap.length; i++) {
      staffToReturn[i] = {
        ID: responseToMap[i].id,
        FirstName: responseToMap[i].firstName,
        MiddleName: responseToMap[i].middleName,
        LastName: responseToMap[i].lastName,
        PreferredName: responseToMap[i].prefferedName,
        IsActive: responseToMap[i].isActive,
        EmailAddress: responseToMap[i].emailAddress
      }
    }
    return staffToReturn;
  }
}


