import { Injectable } from '@angular/core';
import { UserMgmt } from './user-mgmt.component';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  protected UserMgmtList: UserMgmt[] = [
    {userID: 1, username: 'John Caldwell', role: 'Developer', status: 'active', title: 'UI Engineer', dept: 'Software', supervisor: 'Sean Green', location: 'Overland Park, KS', type: 'Contractor', image: ''},
    {userID: 2, username: 'Faisal Alabdulkareem', role: 'Developer', status: 'active', title: 'Software Developer', dept: 'Software', supervisor: 'Sean Green', location: 'Wichita, KS', type: 'Full Time', image: ''},
    {userID: 3, username: 'Detrick DeBurr', role: 'Developer', status: 'active', title: 'Senior Software Developer', dept: 'Software', supervisor: 'Sean Green', location: 'Dallas, TX', type: 'Full Time', image: ''},
    {userID: 4, username: 'Kristina Abbott', role: 'Manager', status: 'active', title: 'Case Manager', dept: 'Permanency', supervisor: 'Gepetta Lewis', location: 'Dallas, TX', type: 'Full Time', image: '/assets/img/v3_0142900.jpg'},
    {userID: 5, username: 'Angie Adams', role: 'User', status: 'active', title: 'Foster Care Worker', dept: 'TFI Family Services', supervisor: 'Sean Green', location: 'Overland Park, KS', type: 'Full Time', image: '/assets/img/v3_0713726.jpg'}
  ];
  
  getAllUserData(): UserMgmt[] {
    return this.UserMgmtList;
  }

  getHousingLocationById(userID: number): UserMgmt | undefined {
    return this.UserMgmtList.find(user => user.userID === userID);
  }
}
