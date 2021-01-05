import { Component, OnInit } from '@angular/core';
import {PlantItemsService} from '../plant-items.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-plant-item',
  templateUrl: './create-plant-item.component.html',
  styleUrls: ['./create-plant-item.component.css']
})
export class CreatePlantItemComponent implements OnInit {

  message = '';

  constructor(private plantItemService: PlantItemsService) { }

  newPlantItem = new FormGroup({
    hireID: new FormControl('', [Validators.required, Validators.minLength(4)]),
    itemtitle: new FormControl('', [Validators.required, Validators.minLength(4)]),
    itemdescription: new FormControl('', [Validators.required, Validators.minLength(4)]),
    yearAdded: new FormControl('', [Validators.required, Validators.minLength(4)]),

  });

  ngOnInit(): void {
  }

  onSubmit(): void{
    console.log('forms submitted with      ' + JSON.stringify(this.newPlantItem.value));
    console.table(this.newPlantItem.value);

    this.plantItemService.addPlantItem(this.newPlantItem.value)
      .subscribe({
        next: plantItem => {
          console.log(JSON.stringify(plantItem));
          this.message = 'Plant Item Added';
          error: (err) => this.message = err
        }
      });
    window.location.reload();
  }

}
