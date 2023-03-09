import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbreManagerComponent } from './nbre-manager.component';

describe('NbreManagerComponent', () => {
  let component: NbreManagerComponent;
  let fixture: ComponentFixture<NbreManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NbreManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NbreManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
