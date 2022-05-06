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

    const timeFrom = new Date();
    timeFrom.setHours(parseInt(startTime[0]));
    timeFrom.setMinutes(parseInt(startTime[1]));

    const timeTo = new Date();
    timeTo.setHours(parseInt(endTime[0]));
    timeTo.setMinutes(parseInt(endTime[1]));

    if (this.currentTime > timeFrom && this.currentTime < timeTo)
      return true
    else return false;

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
