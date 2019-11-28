import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'iresa-portal-station-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit {
  @Input()
  data;

  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.buildForm();
  }

  ngOnInit() {}

  buildForm(): void {
    this.form = this.fb.group({
      name: [''],
      address: [''],
      city: [''],
      state: [''],
      zipCode: [''],
      secretCode: ['']
    });
  }
}
