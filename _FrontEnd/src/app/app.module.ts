import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlantItemRowComponent } from './plant-item-row/plant-item-row.component';
import { PlantItemListComponent } from './plant-item-list/plant-item-list.component';
import {RouterModule} from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CreatePlantItemComponent } from './create-plant-item/create-plant-item.component';
import {ReactiveFormsModule} from '@angular/forms';
import { UpdatePlantItemComponent } from './update-plant-item/update-plant-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PlantItemRowComponent,
    PlantItemListComponent,
    HeaderComponent,
    FooterComponent,
    CreatePlantItemComponent,
    UpdatePlantItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
