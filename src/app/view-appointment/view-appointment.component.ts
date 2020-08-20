import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services';
import { allfriends } from '../_services/allfriends';
import { Appoint } from '../place-fitness-trainer-appointment/place-fitness-trainer-appointment.component';
import { throws } from 'assert';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.css']
})
export class ViewAppointmentComponent implements OnInit {

  constructor(private us: UserService) { }

  colunms = ["Sl NO", "Name", "Address", "City", "Package", "Trainer Preference", "Phone"];
  //index = ["id","firstname","lastname","age","email","phonenumber","trainerpreference","physiotheropist","packages"];
  list: Appoint[] = [];


  ngOnInit() {
    this.getAllAppointments();
  }
  getAllAppointments() {
    this.us.getusers().subscribe
      (
        (response) => {
          this.list = response;
        },
        (error) => {
          console.log("Error :" + error);
        }
      )
  }
  deleteAppointment(id: number) {
    this.us.deleteUser(id).subscribe(
      (data: allfriends) => {
        this.getAllAppointments();
      }
    );
  }
  editForm(appoint) {
    // document.getElementById("inr").innerHTML=appoint.inr;
    document.getElementById("myForm").style.display = "block";
    document.getElementById("list-table").style.display = "none";
    this.us.currentAppointment = Object.assign({}, appoint);

  }
  createAndUpdate(appoint: Appoint) {

    this.us.updateUser(appoint).subscribe();

    location.reload();
  }
  packageEvent(e) {

    var x = e.target.value;

    this.us.currentAppointment.inr = x;

  }
}
