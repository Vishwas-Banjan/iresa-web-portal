import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizeComponent } from './authorize.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AuthorizeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AuthorizeComponent
      }
    ])
  ]
})
export class AuthorizeModule {}
