import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseActionsComponent } from './response-actions.component';

describe('ResponseActionsComponent', () => {
  let component: ResponseActionsComponent;
  let fixture: ComponentFixture<ResponseActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponseActionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponseActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
