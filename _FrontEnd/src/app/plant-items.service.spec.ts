import { TestBed } from '@angular/core/testing';

import { PlantItemsService } from './plant-items.service';

describe('PlantItemsService', () => {
  let service: PlantItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlantItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
