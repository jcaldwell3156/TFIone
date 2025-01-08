import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { NavigationComponent } from '../../navigation/navigation.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { UserProfileComponent } from "../../navigation/user-profile/user-profile.component";

@Component({
  selector: 'app-layout-default',
  standalone: true,
  imports: [MatFormFieldModule, FormsModule, MatInputModule, RouterOutlet, CommonModule, NavigationComponent, MatSidenavModule, MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, UserProfileComponent],
  templateUrl: './layout-default.component.html',
  styleUrl: './layout-default.component.scss'
})
export class LayoutDefaultComponent {
status: any;
isShow = true;

  toggleDisplay() {
    this.isShow = !this.isShow;
  }
}
