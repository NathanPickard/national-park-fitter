import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';


import { environment } from '../environments/environment';

// @Injectable({
//   providedIn: 'root'
// })

@Injectable()

export class SearchService {

  constructor(private httpClient: HttpClient) { }

  private API_KEY: string = environment.NPS_API_KEY;
  private API_URL: string = environment.NPS_BASE_URL;

  // getYosemiteCampgroundResults() {
  //   return this.httpClient.get<any>(this.API_URL + 'campgrounds?' + 'q=yosemite' + '&api_key=' + this.API_KEY);
  // }

  getCampgroundResults() {
    return this.httpClient.get<any>(this.API_URL + 'campgrounds?' + '&api_key=' + this.API_KEY);
  }

  getCampgroundPark() {
    // return this.httpClient.get<any>()
  }
}
