import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
user:User;
  constructor() { }

  ngOnInit() {
    this.user.firstname='jack';
    this.user.lastname='jack';
    this.user.age=30;
  }

  sayHello=()=>{console.log('bingo it works!');this.user.firstname=='jaffar'?this.user.firstname='Bruce':this.user.firstname='jaffar';}

}


