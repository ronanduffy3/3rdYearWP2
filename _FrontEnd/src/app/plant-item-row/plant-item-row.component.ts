import { Component, OnInit, Input } from '@angular/core';
import {IPlantItem} from '../model/plant-item';

@Component({
  selector: 'app-plant-item-row',
  templateUrl: './plant-item-row.component.html',
  styleUrls: ['./plant-item-row.component.css']
})
export class PlantItemRowComponent implements OnInit {

  @Input() plantItem: IPlantItem;
  plantItemList: IPlantItem[];

  constructor() { }

  ngOnInit(): void {
  }

}
