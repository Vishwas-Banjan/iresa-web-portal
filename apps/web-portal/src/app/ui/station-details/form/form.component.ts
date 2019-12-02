import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StationsFacade } from '@iresa/web-portal-data';

function random(length) {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

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
  constructor(private fb: FormBuilder, private stations: StationsFacade) {
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

  save() {
    this.stations.updateStationDetails(this.form.value);
  }

  resetSecretCode() {
    this.form.get('secretCode').setValue(random(12));
  }
}
