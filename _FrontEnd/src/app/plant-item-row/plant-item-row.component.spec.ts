import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantItemRowComponent } from './plant-item-row.component';

describe('PlantItemRowComponent', () => {
  let component: PlantItemRowComponent;
  let fixture: ComponentFixture<PlantItemRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantItemRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantItemRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
