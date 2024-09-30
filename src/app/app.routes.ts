import { Routes } from '@angular/router';
import { GetComponent } from './component/get/get.component';

export const routes: Routes = [
  { path: '', redirectTo: '/get', pathMatch: 'full' },
  { path: 'get', component: GetComponent },
];
