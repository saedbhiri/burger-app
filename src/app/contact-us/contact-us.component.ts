import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Branch } from '../shared/branch.model';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  branches: Branch[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Branch[]>("./assets/branches.json").subscribe(data => {
      this.branches = data;
    });
  }

}
