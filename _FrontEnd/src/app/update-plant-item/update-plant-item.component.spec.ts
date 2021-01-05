import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePlantItemComponent } from './update-plant-item.component';

describe('UpdatePlantItemComponent', () => {
  let component: UpdatePlantItemComponent;
  let fixture: ComponentFixture<UpdatePlantItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePlantItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePlantItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
