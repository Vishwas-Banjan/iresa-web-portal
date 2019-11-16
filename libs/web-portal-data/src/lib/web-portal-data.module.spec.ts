import { async, TestBed } from '@angular/core/testing';
import { WebPortalDataModule } from './web-portal-data.module';

describe('WebPortalDataModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WebPortalDataModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(WebPortalDataModule).toBeDefined();
  });
});
