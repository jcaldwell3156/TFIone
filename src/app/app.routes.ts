import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlacementsComponent } from './placements/placements.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './login/forgot-password/reset-password.component';

import { LayoutDefaultComponent } from './layout/layout-default/layout-default.component';
import { LayoutLoginComponent } from './layout/layout-login/layout-login.component';

export const routes: Routes = [
    {
        path: '', 
        component: LayoutDefaultComponent,
        children: [
            { path: '', component: HomeComponent, title: 'TFI ONE: Home' },
            { path: 'placements', component:PlacementsComponent, title: 'TFI ONE: Placements' }
        ]
    },
    {
        path: 'login',
        component: LayoutLoginComponent,
        children: [
            { path: '', component: LoginComponent, title: 'TFI ONE: Login' },
            { path: 'forgot-password', component: ForgotPasswordComponent, title: 'TFI ONE: Forgot Password' },
            { path: 'reset-password', component: ResetPasswordComponent, title: 'TFI ONE: Reset Password' }
        ]
    },
];
