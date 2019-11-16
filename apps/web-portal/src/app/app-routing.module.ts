import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './ui/login/login.component';
import { DashboardComponent } from './ui/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'curr-playing',
        loadChildren: () =>
          import('./ui/curr-playing/curr-playing.module').then(
            m => m.CurrPlayingModule
          )
      }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
