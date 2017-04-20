import { Component, OnInit } from '@angular/core';
import { Observable }       from 'rxjs/Observable';

import { NutritionixService } from './nutritionix.service';

@Component({
  selector: 'app-nutritionix',
  templateUrl: './nutritionix.component.html',
  styleUrls: ['./nutritionix.component.css']
})
export class NutritionixComponent implements OnInit  {
  //array of items found
  items = [];
  resultArray;
  arraytorender;

  //search string
  searchQuery;

static get parameters(){
  return [[NutritionixService]];
}

  constructor(private nutritionixService: NutritionixService) {
     //this.items = [];
     this.arraytorender =[];
  } 

  ngOnInit(): any {
    this.nutritionixService.getSearchResults(this.searchQuery).subscribe(
      response => { 
        console.log(response)
        this.resultArray = response 
      }
    );



     
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
            },
            (err) => alert ("Error searching: " + err)           
          )



  }


}
