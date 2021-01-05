import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IPlantItem} from '../model/plant-item';

@Component({
  selector: 'app-update-plant-item',
  templateUrl: './update-plant-item.component.html',
  styleUrls: ['./update-plant-item.component.css']
})
export class UpdatePlantItemComponent implements OnInit {

  @Input() plantItem: IPlantItem;

  constructor() { }

  updatePlantItem = new FormGroup({
    hireID: new FormControl('', [Validators.required, Validators.minLength(4)]),
    itemtitle: new FormControl('', [Validators.required, Validators.minLength(4)]),
    itemdescription: new FormControl('', [Validators.required, Validators.minLength(4)]),
    yearAdded: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });



  ngOnInit(): void {
  }

  onSubmit(): void{
    console.log(this.plantItem);
  }

}
