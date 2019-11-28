import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizeComponent } from './authorize.component';
import { RouterModule } from '@angular/router';
import { LoaderModule } from '@iresa/shared/ui';
import { StationsDataModule } from '@iresa/web-portal-data';

@NgModule({
  declarations: [AuthorizeComponent],
  imports: [
    CommonModule,
    LoaderModule,
    StationsDataModule,
    RouterModule.forChild([
      {
        path: '',
        component: AuthorizeComponent
      }
    ])
  ]
})
export class AuthorizeModule {}
