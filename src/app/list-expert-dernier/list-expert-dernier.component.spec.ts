import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExpertDernierComponent } from './list-expert-dernier.component';

describe('ListExpertDernierComponent', () => {
  let component: ListExpertDernierComponent;
  let fixture: ComponentFixture<ListExpertDernierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListExpertDernierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListExpertDernierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
