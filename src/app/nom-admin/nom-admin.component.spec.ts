import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomAdminComponent } from './nom-admin.component';

describe('NomAdminComponent', () => {
  let component: NomAdminComponent;
  let fixture: ComponentFixture<NomAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NomAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NomAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
