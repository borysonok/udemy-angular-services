import { Component, OnInit } from '@angular/core';
import { UsersService } from './shared/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit {

  public activeUsers = [];
  public inactiveUsers = [];

  constructor(private userService: UsersService) { }

  public ngOnInit() {
    this.activeUsers = this.userService.activeUsers;
    this.inactiveUsers = this.userService.inactiveUsers;
  }

}
