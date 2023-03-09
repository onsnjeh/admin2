import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbreVisiteurComponent } from './nbre-visiteur.component';

describe('NbreVisiteurComponent', () => {
  let component: NbreVisiteurComponent;
  let fixture: ComponentFixture<NbreVisiteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NbreVisiteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NbreVisiteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
