import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusOptionComponent } from './plus-option.component';

describe('PlusOptionComponent', () => {
  let component: PlusOptionComponent;
  let fixture: ComponentFixture<PlusOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlusOptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlusOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
