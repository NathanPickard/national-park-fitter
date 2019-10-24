import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable()

export class SearchService {

  constructor(private httpClient: HttpClient) { }

  parkCode: any;

  private API_KEY: string = environment.NPS_API_KEY;
  private API_URL: string = environment.NPS_BASE_URL;
  private DARK_SKY_KEY: string = environment.DARK_SKY_API_KEY;
  private DARK_SKY_URL: string = environment.DARK_SKY_BASE_URL;

  getLatestNewsReleases() {
    return this.httpClient.get<any>(this.API_URL + 'newsreleases?' + '&api_key=' + this.API_KEY + '&fields=images' + '&limit=5');
  }

  getNextLatestNewsReleases(nextSetNewsRelease) {
    return this.httpClient.get<any>(this.API_URL + 'newsreleases?' + '&limit=5' + '&start=' + nextSetNewsRelease + '&api_key=' + this.API_KEY + '&fields=images');
  }

  getParkRecInfo() {
    // return this.httpClient.get<any>
  }

  getWeatherInfo(latitude, longitude) {
    return this.httpClient.get<any>(this.DARK_SKY_URL + this.DARK_SKY_KEY + '/' + latitude + ',' + longitude);
  }

  getHomepageBackgroundImage() {
    return this.httpClient.get<any>(this.API_URL + 'parks?')
  }


  getCampgroundResults() {
    return this.httpClient.get<any>(this.API_URL + 'campgrounds?' + '&api_key=' + this.API_KEY + '&limit=5');
  }

  getCampgroundPark(parkCode) {
    return this.httpClient.get<any>(this.API_URL + 'parks?' + 'parkCode=' + parkCode + '&fields=images' + '&api_key=' + this.API_KEY + '&limit=5');
  }

  getParkStepperResults(stateQuery, queries) {
    return this.httpClient.get<any>(this.API_URL + 'parks?' + 'api_key=' + this.API_KEY + '&fields=images' + queries + '&stateCode=' + stateQuery + '&limit=5');
  }

  getParkResults() {
    return this.httpClient.get<any>(this.API_URL + 'parks?' + 'api_key=' + this.API_KEY + '&fields=images' + '&limit=5');
  }

  getParkName(parkCode) {
    return this.httpClient.get<any>(this.API_URL + 'parks?' + 'parkCode=' + parkCode + '&api_key=' + this.API_KEY);
  }

  searchParks(searchQuery) {
    return this.httpClient.get<any>(this.API_URL + 'parks?' + 'q=' + searchQuery + '&fields=images' + '&api_key=' + this.API_KEY);
  }
}