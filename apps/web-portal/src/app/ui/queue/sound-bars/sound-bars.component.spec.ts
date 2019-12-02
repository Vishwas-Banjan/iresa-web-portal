import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundBarsComponent } from './sound-bars.component';

describe('SoundBarsComponent', () => {
  let component: SoundBarsComponent;
  let fixture: ComponentFixture<SoundBarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SoundBarsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundBarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
