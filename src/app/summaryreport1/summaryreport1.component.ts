

import { Component, OnInit } from '@angular/core';
import { Summaryreport1 } from '../summaryreport1';
import { User } from '../user';
import { APIService } from '../API.service';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import { Router } from '@angular/router';


@Component({
  selector: 'app-summaryreport1',
  templateUrl: './summaryreport1.component.html',
  styleUrls: ['./summaryreport1.component.scss']
})
export class Summaryreport1Component implements OnInit {
  allReport:any [];
  userId: string;
  userName: string;
  user = new User('', '', '', '', '', '','');
  report = new Summaryreport1("",0);
  summaryreportones = Array<Summaryreport1>();
  
  constructor(private api: APIService, private router: Router) { }

  async ngOnInit() {
    Auth.currentAuthenticatedUser({
      bypassCache: false
    }).then(async user => {
      this.userId = user.attributes.sub;
      this.userName = user.username;
      let result = await this.api.GetUser(this.userId);
      if (!result) {
       // this.userCreated = false;
      //  this.user = new User('', '', '', '', '', '', '');
      } else {
      //  this.userCreated = true;
      //  this.showPhoto = !!result.image;
     
      let response = await this.api.ListSummaryreportones();
      this.allReport = response.items;
      
        this.user = new User(
          this.userId,
          result.username,
          result.firstName,
          result.lastName,
          result.bio,
          result.image,
          result.answerone
        )
      }
    })
    .catch(err => console.log(err));
    

  }

  async listReport(){
    let response = await this.api.ListSummaryreportones();
    this.allReport = response.items;
  }
  logOut() {
    Auth.signOut({ global: true })
    .then(data => {
      this.router.navigate(['/auth']);
    })
    .catch(err => console.log(err));
  }
}
