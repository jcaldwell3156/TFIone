import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../data/users.service';
import { UserMgmt } from '../../data/user-mgmt.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, MatSelectModule, MatRadioModule, MatInputModule, RouterLink, MatIconModule, MatButtonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})

export class UserProfileComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  userService = inject(UsersService);
  user: UserMgmt | undefined;

  constructor() {
    const userMgmtId = parseInt(this.route.snapshot.params['id'], 10);
    this.user = this.userService.getHousingLocationById(userMgmtId);
  }

  getInitials(username: string): string | undefined {
    return username.split(" ").map(name => name[0]).join("");
  }  
  
  userStatus: string[] = ['Active', 'Inactive'];
  userDept: string[] = ['Software', 'Permanancy', 'Foster Care Worker'];
  userLocations: string[] = ['Kansas City, MO', 'Overland Park, KS', 'Dallas, TX', 'Wichita, KS'];
  userTypes: string[] = ['Full Time', 'Part Time', 'Contractor']
  userSupervisors: string[] = ['Sean Green', 'Johnny', 'Jackie'];

}
