import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailPreviewComponent } from './mail-preview.component';

describe('MailPreviewComponent', () => {
  let component: MailPreviewComponent;
  let fixture: ComponentFixture<MailPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
