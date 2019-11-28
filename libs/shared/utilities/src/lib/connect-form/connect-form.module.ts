import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectFormDirective } from './connect-form.directive';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ConnectFormDirective],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [ConnectFormDirective, ReactiveFormsModule, FormsModule]
})
export class ConnectFormModule {}
