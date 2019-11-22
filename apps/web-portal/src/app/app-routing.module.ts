import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./ui/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'authorize',
    loadChildren: () =>
      import('./ui/authorize/authorize.module').then(m => m.AuthorizeModule)
  },
  {
    path: '',
    loadChildren: () =>
      import('./ui/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
