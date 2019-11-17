import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./ui/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./ui/login/login.module').then(m => m.LoginModule)
  },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
