import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbreClientComponent } from './nbre-client.component';

describe('NbreClientComponent', () => {
  let component: NbreClientComponent;
  let fixture: ComponentFixture<NbreClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NbreClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NbreClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
