import { Directive, Input } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';

@Directive({
  selector: '[iresaConnectForm]'
})
export class ConnectFormDirective {
  @Input('iresaConnectForm')
  set data(val: any) {
    if (val) {
      this.formGroupDirective.form.patchValue(val);
      this.formGroupDirective.form.markAsPristine();
    }
  }

  constructor(private formGroupDirective: FormGroupDirective) {}
}
