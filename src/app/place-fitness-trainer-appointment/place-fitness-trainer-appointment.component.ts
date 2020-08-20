import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UserService } from '../_services';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';



export class Appoint {

  constructor(
    public firstname: string,
    public lastname: string,
    public packages: string,
    public physiotherapist: string,
    public trainerpreference: string,
    public age: number,
    public email: string,
    public phonenumber: number,
    public pincode: number,
    public country: string,
    public state: string,
    public city: string,
    public streetaddress: string,
    public inr: number,
    public date: string

  ) { }
}

@Component({
  selector: 'app-place-fitness-trainer-appointment',
  templateUrl: './place-fitness-trainer-appointment.component.html',
  //styleUrls: ['./place-fitness-trainer-appointment.component.css']
})
export class PlaceFitnessTrainerAppointmentComponent implements OnInit {
  fitnessForm: FormGroup;
  @Output() Formdata = new EventEmitter<Appoint>();

  public obj: any = {};
  inputVar: string;

  constructor(private us: UserService, private fb: FormBuilder) { this.inputVar = "" }


  ngOnInit() {

    this.fitnessForm = this.fb.group({
      firstname: ["", [Validators.required]],
      lastname: ["", [Validators.required]],
      phonenumber: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]],
      age: ["", [Validators.required]],
      streetaddress: ["", [Validators.required]],
      city: ["", [Validators.required]],
      state: ["", [Validators.required]],
      country: ["", [Validators.required]],
      pincode: ["", [Validators.required]],
      physiotherapist: ["", [Validators.required]],
      packages: ["", [Validators.required]],
      inr: ["", [Validators.required]],
      date: ["", [Validators.required]],
      trainerpreference: ["", [Validators.required]]

    });

  }

  packageEvent(e) {

    var x = e.target.value;

    this.inputVar = x;

  }
  adduser() {
    this.obj = { ...this.fitnessForm.value, ...this.obj };
    this.fitnessForm.value;
    console.log(
      "LOG: LoginComponent -> onSubmit -> this.fitnessForm.value",
      this.fitnessForm.value
    );


    if (this.fitnessForm.valid) {
      this.Formdata.emit(
        new Appoint(
          this.fitnessForm.value.firstname,
          this.fitnessForm.value.lastname,
          this.fitnessForm.value.packages,
          this.fitnessForm.value.physiotherapist,
          this.fitnessForm.value.trainerpreference,
          this.fitnessForm.value.age,

          this.fitnessForm.value.email,
          this.fitnessForm.value.phonenumber,
          this.fitnessForm.value.pincode,
          this.fitnessForm.value.country,
          this.fitnessForm.value.state,
          this.fitnessForm.value.city,
          this.fitnessForm.value.streetaddress,
          this.fitnessForm.value.date,
          this.fitnessForm.value.inr

        )
      );


    }
    this.us.setuser(new Appoint(this.fitnessForm.value.firstname,
      this.fitnessForm.value.lastname,
      this.fitnessForm.value.packages,
      this.fitnessForm.value.physiotherapist,
      this.fitnessForm.value.trainerpreference,
      this.fitnessForm.value.age,

      this.fitnessForm.value.email,
      this.fitnessForm.value.phonenumber,
      this.fitnessForm.value.pincode,
      this.fitnessForm.value.country,
      this.fitnessForm.value.state,
      this.fitnessForm.value.city,
      this.fitnessForm.value.streetaddress,
      this.fitnessForm.value.date,
      this.fitnessForm.value.inr
    )).subscribe();

  }
}

