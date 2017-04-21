import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Food } from './Food';

import 'rxjs/Rx';

@Injectable()
export class NutritionixService {
  private BASE_URL = "http://api.nutritionix.com/v1_1/search/";
  private APP_ID = "7b43b860";
  private API_KEY = "65a509b92f1d44aa3d1fd800a5e151c5";


  static get parameters() {
    return [[Http]];
  }

  constructor(private http: Http) { }

  // private extractData(res: Response){
  //   let body = res.json().hits;
  //   return body.data || {};
  // }


  getSearchResults(_searchString) {
    // fields to get back from API based on documenation
    let fields = 'item_name,item_id,brand_name,nf_calories,nf_total_fat';

    let params: URLSearchParams = new URLSearchParams();
    params.set('results', '0:10');
    params.set('appId', this.APP_ID);
    params.set('appKey', this.API_KEY);
    params.set('fields', fields);
    // params.set('cal_min', '0');
    // params.set('cal_max', '50000');

    let url = this.BASE_URL + _searchString;
    //console.log(url);
    return this.http.get(url, { search: params })
      //.map(this.extractData);
      .map(res => res.json().hits);
  }
















  // search (term: string) {
  //   let url = this.BASE_URL;
  //   let params = new URLSearchParams();
  //   params.set('appId', this.APP_ID);
  //   params.set('appKey', this.APP_KEY);
  //   params.set('fields', this.FIELDS );
  //   // TODO: Add error handling
  //   // return this.jsonp
  //   //            .get(url, { search: params })
  //   //            .map(response => <string[]> response.json()[1]);
  // }

  //  getSomeData(_searchString) {

  //       let params: URLSearchParams = new URLSearchParams();
  //       params.set('appId', this.APP_ID);
  //       params.set('appKey', this.API_KEY);

  //       let url = this.BASE_URL + _searchString;

  //       return this.http.get(url, { search: params })
  //         .map(res => res.json().hits);
  // }



}





