import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StationsFacade } from '@iresa/web-portal-data';

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
}
