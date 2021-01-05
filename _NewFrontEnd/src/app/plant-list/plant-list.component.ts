import { Component, OnInit, Output } from '@angular/core';
import {IPlantItem} from '../model/plant-item';
import {PlantItemsService} from '../plant-items.service';
import {EventEmitter} from 'events';
import {FormControl, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styles: ['./plant-item-list.component.css']
})
export class PlantListComponent implements OnInit {

  @Output() plantItemToUpdate = new EventEmitter();
  updateableID: string;
  plantItemList: IPlantItem[];
  message: string;

  constructor(private plantItemService: PlantItemsService) { }

  updatePlantItem = new FormGroup({
    hireID: new FormControl('', [Validators.required, Validators.minLength(4)]),
    itemtitle: new FormControl('', [Validators.required, Validators.minLength(4)]),
    itemdescription: new FormControl('', [Validators.required, Validators.minLength(4)]),
    yearAdded: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });

  ngOnInit(): void {

    this.plantItemService.getPlantItems().subscribe({
      next: (value: IPlantItem[]) => this.plantItemList = value,
      complete: () => console.log('Plant Item Service Finished'),
      error: (mess) => this.message = mess
    });

  }

  clicked(plantItem: IPlantItem): void{
    this.updatePlantItem.controls.hireID.setValue(plantItem.hireID);
    this.updatePlantItem.controls.itemtitle.setValue(plantItem.itemtitle);
    this.updatePlantItem.controls.itemdescription.setValue(plantItem.itemdescription);
    this.updatePlantItem.controls.yearAdded.setValue(plantItem.yearAdded);
    this.updateableID = plantItem.id;
    console.log(this.updateableID);
  }

  onDelete(): void{
    console.log('Submitted to delete ' + JSON.stringify(this.updateableID));

    this.plantItemService.deletePlantItem(this.updateableID);

    window.location.reload();
  }

  onSubmit(): void{
    console.log('Submitted to upload with' + JSON.stringify(this.updatePlantItem.value));

    this.plantItemService.updatePlantItem(this.updateableID, this.updatePlantItem.value)
      .subscribe({
        next: plantItem => {
          console.log(JSON.stringify(plantItem));
          error: (err) => this.message = err;
        }
      });
    window.location.reload();
  }
}
