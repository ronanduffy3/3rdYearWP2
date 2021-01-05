import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantItemListComponent } from './plant-item-list.component';

describe('PlantItemListComponent', () => {
  let component: PlantItemListComponent;
  let fixture: ComponentFixture<PlantItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantItemListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
