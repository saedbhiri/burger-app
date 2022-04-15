import { Component, OnInit } from '@angular/core';
import { Branch } from './branch.model';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  branches: Branch[] = [
    {
      city: "Tel-Aviv",
      phoneNumber: "09-9399391",
      address: "Lincoln 15 "
    },
    {
      city: "Herzilya",
      phoneNumber: "09-9399392",
      address: "Aba helel 3"
    },
    {
      city: "Kfar-saba",
      phoneNumber: "03-9399393",
      address: "Waitsman 10"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
