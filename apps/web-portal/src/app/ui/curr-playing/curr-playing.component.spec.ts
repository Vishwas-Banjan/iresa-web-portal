import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrPlayingComponent } from './curr-playing.component';

describe('CurrPlayingComponent', () => {
  let component: CurrPlayingComponent;
  let fixture: ComponentFixture<CurrPlayingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrPlayingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrPlayingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
