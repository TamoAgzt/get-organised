import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallenderComponent } from './callender.component';

describe('CallenderComponent', () => {
  let component: CallenderComponent;
  let fixture: ComponentFixture<CallenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
