import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { SearchService } from './../search.service';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;


  constructor(private _formBuilder: FormBuilder,
    private searchService: SearchService) { }

  stepperForm: FormGroup;

  foundCampgrounds: any[];
  foundCampgroundPark: any[];

  campgroundParkArray: any[] = [name];

  campgroundPark: any;

  campgroundParkCode: any;

  resultsFound = false;

  ngOnInit() {

    // this.stepperForm = new FormGroup({
    //   'firstCtrl': new FormControl(null, [Validators.required])
    // });


    this.firstFormGroup = this._formBuilder.group({

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

    this.secondFormGroup = this._formBuilder.group({

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

    this.thirdFormGroup = this._formBuilder.group({
      weatherCtrl: ['', Validators.required],
      regulationsCtrl: ['', Validators.required],
      directionsCtrl: ['', Validators.required],
    });
  }


  onSubmitStepper() {
    // console.log(this.firstFormGroup.value.firstCtrl);

    this.getCampgroundData();
    this.getParkData();
    // return this.searchService.getCampgroundResults().subscribe(
    //   data => this.handleSuccess(data),
    //   error => this.handleError(error)
    // );

    // if (this.firstFormGroup.value.firstCtrl == true) {
    // return this.searchService.getYosemiteCampgroundResults().subscribe(
    // return this.searchService.getCampgroundResults().subscribe(
    // data => this.handleSuccess(data),
    // error => this.handleError(error)
    // );
    // }
  }

  getCampgroundData() {
    return this.searchService.getCampgroundResults().subscribe(
      data => this.handleSuccess(data),
      error => this.handleError(error)
    );
  }

  getParkData() {
    return this.searchService.getParkResults().subscribe(
      data => this.handleSuccess(data),
      error => this.handleError(error)
    )
  }

  handleSuccess(data) {
    // this.foundYosemiteCampgrounds = data;
    this.resultsFound = true;
    console.log();

    this.foundCampgrounds = data.data;
    console.log(this.foundCampgrounds);

    // this.campgroundPark = this.foundCampgrounds.parkCode;
    console.log(this.campgroundPark);

    // if (this.firstFormGroup.value.firstCtrl == true) {

    for (let i = 0; i < this.foundCampgrounds.length; i++) {
      this.campgroundPark = this.foundCampgrounds[i].parkCode;
      console.log(this.campgroundPark);

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
    // this.foundCampgroundPark = data.data;

    // for (let i = 0; i < this.foundCampgroundPark.length; i++) {
    //   console.log(this.foundCampgroundPark[i].fullName);

    //   this.campgroundParkArray.push(this.foundCampgroundPark[i].fullName);
    //   this.foundCampgrounds.push(this.foundCampgroundPark[i].fullName);

    //   console.log(this.foundCampgrounds);
    // }




    // this.campgroundParkArray.push('24');

    // this.foundCampgroundPark[i].fullName.push(this.campgroundParkArray);

    // console.log(this.campgroundParkArray);

    // this.foundCampgroundPark.unshift(this.campgroundParkArray);



    // console.log(this.foundCampgroundPark);
  }

  handleError(error) {
    console.log(error);
  }


}
