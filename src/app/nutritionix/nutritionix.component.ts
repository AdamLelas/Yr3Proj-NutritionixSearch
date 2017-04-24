import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { NutritionixService } from './nutritionix.service';
import { Router } from '@angular/router';
import { Food } from './Food';

@Component({
  selector: 'app-nutritionix',
  templateUrl: './nutritionix.component.html',
  styleUrls: ['./nutritionix.component.css']
})
export class NutritionixComponent implements OnInit {
  //array of items found
  items = [];
  foodObj;
  resultArray;
  jentries = [];

  //search string
  searchQuery;

  static get parameters() {
    return [[NutritionixService]];
  }

  constructor(private nutritionixService: NutritionixService) { }

  ngOnInit(): any {
    this.getJournalFromService();
  }

  //gets items from nutritionx search endpoint
  getItems(term: string) {
    let q = term;
    //this.searchQuery.trim()
    if (q == '' || q.length < 3) {
      return;
    }

    this.nutritionixService.getSearchResults(q).subscribe(
      data => {
        console.log('search results', data/*.hits*/)
        this.items = data
      },
      (err) => alert("Error searching: " + err)
    )
  }


  getJournalFromService() {
    this.nutritionixService.getJournal().subscribe(
      data => { this.jentries = data },
      // err => console.error(err),
      () => console.log('...done loading entries')
    );
  }

  addFoodToJournal(term){
    this.nutritionixService.addToJournal(term).subscribe(
      data => {
        this.getJournalFromService();
        return true;
      },
      error => {
        console.log("Error adding food to Journal");
      }
    );
  }


}
