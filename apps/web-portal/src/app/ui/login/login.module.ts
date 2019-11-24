import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import {
  MatCardModule,
  MatButtonModule,
  MatTabsModule,
  MatFormFieldModule,
  MatInputModule,
  MatDividerModule
} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthDataModule } from '@iresa/web-portal-data';
import { FormComponent } from './form/form.component';
import { StationListComponent } from './station-list/station-list.component';

@NgModule({
  declarations: [LoginComponent, FormComponent, StationListComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    ReactiveFormsModule,
    FormsModule,
    AuthDataModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginComponent
      }
    ])
  ],
  exports: [FormComponent, StationListComponent]
})
export class LoginModule {}
