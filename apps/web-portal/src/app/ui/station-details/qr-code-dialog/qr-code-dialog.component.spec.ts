import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QRCodeDialogComponent } from './qr-code-dialog.component';

describe('BarcodeDialogComponent', () => {
  let component: QRCodeDialogComponent;
  let fixture: ComponentFixture<QRCodeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QRCodeDialogComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QRCodeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
