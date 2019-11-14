import { async, TestBed } from '@angular/core/testing';
import { NgxSpotifyModule } from './ngx-spotify.module';

describe('NgxSpotifyModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxSpotifyModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NgxSpotifyModule).toBeDefined();
  });
});
