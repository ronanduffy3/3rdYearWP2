import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePlantItemComponent } from './create-plant-item.component';

describe('CreatePlantItemComponent', () => {
  let component: CreatePlantItemComponent;
  let fixture: ComponentFixture<CreatePlantItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePlantItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePlantItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
