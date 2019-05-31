import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  banana:string;
  users: User[]
  expanded:false;
  constructor() { }

  ngOnInit() {
    this.banana="current value";
    this.users= [{ firstname: 'jack', lastname: 'smith', age: 28,expanded:false,image: 'http://lorempixel.com/600/600/people/1' },
  { firstname: 'joe', lastname: 'nikki', age: 48,expanded:false,image: 'http://lorempixel.com/600/600/people/2' },
  { firstname: 'jill', lastname: 'jonas', age: 38,expanded:false,image: 'http://lorempixel.com/600/600/people/3' }]
  }

showBanana=()=>{
  console.log(this.banana);
}

  expandall=()=>{
    this.expanded=!this.expanded;
  this.users.forEach(element => {
    element.expanded=this.expanded;
  });}
  expand=(user:User)=>user.expanded=!user.expanded;
}
