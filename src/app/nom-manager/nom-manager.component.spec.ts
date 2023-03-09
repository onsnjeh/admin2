import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomManagerComponent } from './nom-manager.component';

describe('NomManagerComponent', () => {
  let component: NomManagerComponent;
  let fixture: ComponentFixture<NomManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NomManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NomManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
