import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SearchService } from './../search.service';

@Component({
  selector: 'app-campground',
  templateUrl: './campground.component.html',
  styleUrls: ['./campground.component.css']
})
export class CampgroundComponent implements OnInit {

  accessibilityFormGroup: FormGroup;
  amenitiesFormGroup: FormGroup;
  generalInfoFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder,
    private searchService: SearchService) { }

  stepperSubmitted: boolean = false;
  resultsFound: boolean = false;

  foundCampgrounds: any[];
  foundCampgroundPark: any[];


  campgroundParkArray: any[];
  campgroundPark: any;


  ngOnInit() {
    this.accessibilityFormGroup = this._formBuilder.group({

      wheelchairAccessCtrl: ['', Validators.required],
      internetCtrl: ['', Validators.required],
      rvAllowedCtrl: ['', Validators.required],
      rvMaxCtrl: ['', Validators.required],
      rvInfoCtrl: ['', Validators.required],
      cellPhoneInfoCtrl: ['', Validators.required],
      fireStoveCtrl: ['', Validators.required],
      additionalInfoCtrl: ['', Validators.required],
      adaCtrl: ['', Validators.required],
      accessRoadsCtrl: ['', Validators.required],
      trailerAllowedCtrl: ['', Validators.required],
      trailerMaxCtrl: ['', Validators.required],
      classificationsCtrl: ['', Validators.required]
    });

    this.amenitiesFormGroup = this._formBuilder.group({

      trashRecyclingCtrl: ['', Validators.required],
      toiletsCtrl: ['', Validators.required],
      internetConnectivityCtrl: ['', Validators.required],
      showersCtrl: ['', Validators.required],
      cellPhoneReceptionCtrl: ['', Validators.required],
      laundryCtrl: ['', Validators.required],
      amphitheaterCtrl: ['', Validators.required],
      dumpStationCtrl: ['', Validators.required],
      campStoreCtrl: ['', Validators.required],
      staffVolunteerCtrl: ['', Validators.required],
      potableWatertCtrl: ['', Validators.required],
      iceAvailableForSaleCtrl: ['', Validators.required],
      firewoodForSaleCtrl: ['', Validators.required],
      foodStorageLockersCtrl: ['', Validators.required]
    });

    this.generalInfoFormGroup = this._formBuilder.group({
      weatherCtrl: ['', Validators.required],
      regulationsCtrl: ['', Validators.required],
      directionsCtrl: ['', Validators.required],
    });
  }

  onSubmitStepper() {
    this.stepperSubmitted = true;
    // console.log(this.firstFormGroup.value.firstCtrl);

    this.getCampgroundData();
    // return this.searchService.getCampgroundResults().subscribe(
    //   data => this.handleSuccess(data),
    //   error => this.handleError(error)
    // );
  }

  getCampgroundData() {
    return this.searchService.getCampgroundResults().subscribe(
      data => this.handleSuccess(data),
      error => this.handleError(error)
    );
  }

  handleSuccess(data) {
    // this.foundYosemiteCampgrounds = data;
    this.resultsFound = true;

    this.foundCampgrounds = data.data;
    console.log(this.foundCampgrounds);

    // this.campgroundPark = this.foundCampgrounds.parkCode;
    // console.log(this.campgroundPark);

    // if (this.firstFormGroup.value.firstCtrl == true) {

    for (let i = 0; i < this.foundCampgrounds.length; i++) {
      this.campgroundPark = this.foundCampgrounds[i].parkcode;
      // console.log(this.campgroundPark);

      this.getParkName(this.campgroundPark);
    }
  }

  getParkName(campgroundPark) {
    return this.searchService.getCampgroundPark(this.campgroundPark).subscribe(
      data => this.handleCampgroundParkSuccess(data),
      error => this.handleError(error),
    );
  }

  handleCampgroundParkSuccess(data) {
    this.foundCampgroundPark = data.data;

    // console.log(this.foundCampgroundPark);

    // this.campgroundParkArray.push(this.foundCampgroundPark);
    // this.foundCampgroundPark.push(this.campgroundParkArray);

    // console.log(this.campgroundParkArray);

    for (let i = 0; i < this.foundCampgroundPark.length; i++) {
      // console.log(this.foundCampgroundPark[i].fullname);

      this.campgroundParkArray.push(this.foundCampgroundPark[i].fullname);
      // this.foundCampgrounds.push(this.foundCampgroundPark[i].fullname);

      // console.log(this.foundCampgrounds);
      console.log(this.campgroundParkArray);
    }
  }

  handleError(error) {
    console.log(error);
  }

}