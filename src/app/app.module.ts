import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NutritionixComponent } from './nutritionix/nutritionix.component';
import { NutritionixService } from './nutritionix/nutritionix.service';


@NgModule({
  declarations: [
    AppComponent,
    NutritionixComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [NutritionixService],
  bootstrap: [AppComponent]
})
export class AppModule { }
