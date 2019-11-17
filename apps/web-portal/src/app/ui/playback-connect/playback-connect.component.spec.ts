import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaybackConnectComponent } from './playback-connect.component';

describe('PlaybackConnectComponent', () => {
  let component: PlaybackConnectComponent;
  let fixture: ComponentFixture<PlaybackConnectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlaybackConnectComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaybackConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
