import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtObjectsFilterComponent } from './art-objects-filter.component';

describe('ArtObjectsFilterComponent', () => {
  let component: ArtObjectsFilterComponent;
  let fixture: ComponentFixture<ArtObjectsFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtObjectsFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtObjectsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
