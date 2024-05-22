import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlacementsComponent } from './placements/placements.component';
import { LoginComponent } from './login/login.component';

import { LayoutDefaultComponent } from './layout-default/layout-default.component';
import { LayoutLoginComponent } from './layout-login/layout-login.component';

export const routes: Routes = [
    {
        path: '', 
        component: LayoutDefaultComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'placements', component:PlacementsComponent }
        ]
    },
    {
        path: '',
        component: LayoutLoginComponent,
        children: [
            { path: 'login', component: LoginComponent }
        ]
    },
];
