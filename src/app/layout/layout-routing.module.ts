import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from '../features/dashboard/dashboard.component';
import { authGuard } from '../shared/guard/auth.guard';

const routes: Routes = [{
  path: '', component: LayoutComponent,
  children: [
    { path: '', component: DashboardComponent, canActivate: [authGuard] },
    { path: 'rooms', loadChildren: () => import('../features/rooms/rooms.module').then(m => m.RoomsModule),  canActivate: [authGuard] }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
