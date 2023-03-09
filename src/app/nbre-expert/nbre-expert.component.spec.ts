import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbreExpertComponent } from './nbre-expert.component';

describe('NbreExpertComponent', () => {
  let component: NbreExpertComponent;
  let fixture: ComponentFixture<NbreExpertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NbreExpertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NbreExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
