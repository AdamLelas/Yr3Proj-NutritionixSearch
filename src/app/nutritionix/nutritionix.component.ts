import { Component, OnInit } from '@angular/core';
import { Observable }       from 'rxjs/Observable';

import { NutritionixService } from './nutritionix.service';
import { Router }            from '@angular/router';

@Component({
  selector: 'app-nutritionix',
  templateUrl: './nutritionix.component.html',
  styleUrls: ['./nutritionix.component.css']
})
export class NutritionixComponent implements OnInit  {
  //array of items found
  items = [];
  resultArray;

  //search string
  searchQuery;

static get parameters(){
  return [[NutritionixService]];
}

  constructor(
    private nutritionixService: NutritionixService,
    private router: Router
  ) {

  } 

  ngOnInit(): any { 
    // this.nutritionixService.getSearchResults(this.searchQuery).subscribe(
    //   response => { 
    //     console.log(response)
    //     this.resultArray = response 
    //   }
   // );     
  }

  makeObject(r: any){

  }

  gotoFood(food: any):void{    
    let link = ['/detail', food.id];
    this.router.navigate(link);  
  }

  getItems(term: string){
    let q = term;
    //this.searchQuery.trim()
    if(q ==''|| q.length < 3){
      return;
    }

    this.nutritionixService.getSearchResults(q).subscribe(
            data => {
              console.log('search results',data/*.hits*/)
              this.items = data
              this.makeObject(this.items)
            },
            (err) => alert ("Error searching: " + err)           
          )
  }


}
