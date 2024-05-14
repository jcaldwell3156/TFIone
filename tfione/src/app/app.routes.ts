import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlacementsComponent } from './placements/placements.component';

export const routes: Routes = [
    {'path': '', component:HomeComponent},
    {'path': 'placements', component:PlacementsComponent}
];
