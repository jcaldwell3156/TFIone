import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavigationComponent } from '../../navigation/navigation.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-layout-default',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent, MatSidenavModule, MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './layout-default.component.html',
  styleUrl: './layout-default.component.scss'
})
export class LayoutDefaultComponent {

}
