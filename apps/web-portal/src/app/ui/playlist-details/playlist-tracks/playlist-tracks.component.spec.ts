import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistTracksComponent } from './playlist-tracks.component';

describe('PlaylistTracksComponent', () => {
  let component: PlaylistTracksComponent;
  let fixture: ComponentFixture<PlaylistTracksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlaylistTracksComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistTracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
