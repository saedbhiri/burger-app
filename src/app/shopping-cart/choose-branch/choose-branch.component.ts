import { ShoppingCartService } from './../shopping-cart.service';
import { HttpClient } from '@angular/common/http';
import { Branch } from './../../shared/branch.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-choose-branch',
  templateUrl: './choose-branch.component.html',
  styleUrls: ['./choose-branch.component.css']
})
export class ChooseBranchComponent implements OnInit {

  branches: Branch[] = [];
  currentTime: Date = new Date();

  constructor(private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private shoppingCartService: ShoppingCartService) {
    setInterval(() => {
      this.currentTime = new Date();
    }, 1);
  }

  ngOnInit(): void {
    this.http.get<Branch[]>("./assets/branches.json").subscribe(data => {
      this.branches = data;
    });
  }

  checkTime(start: string, end: string): boolean {
    const startTime = start.split(':');
    const endTime = end.split(':');

    if (this.currentTime.getHours() < +startTime[0]){
      return false;
    }

    else if(this.currentTime.getHours() > +startTime[0]){
      if (this.currentTime.getHours() > +endTime[0]){
        return false;
      }
    }

    else if (this.currentTime.getHours() == +startTime[0]) {
      if (this.currentTime.getMinutes() < +startTime[1]) {
        return false;
      }
    }

    if (this.currentTime.getHours() == +endTime[0]) {
      if (this.currentTime.getMinutes() > +startTime[1]) {
        return false;
      }
    }
    return true;
  }

  onChoose(branch: string, start: string, end: string) {
    if (this.checkTime(start, end)) {
      this.shoppingCartService.storeBranch(branch);
      this.router.navigate(['../receivingOrderWay'], { relativeTo: this.route });
    }
    else {
      alert("the branch is closed right now!!");
      this.router.navigate(['../branches'], { relativeTo: this.route });
    }
  }
}
