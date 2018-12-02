import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from '../shared/users.service';
import { CounterService } from '../shared/counter.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {

  public activeInactive = 0;
  @Input() users: string[];

  public constructor(
    private usersService: UsersService,
    private counterService: CounterService) { }

  public ngOnInit() {
    this.counterService.update_inactive.subscribe(number => this.activeInactive = number);
  }

  public onSetToInactive(id: number) {
    this.usersService.addToInactive(id);
  }

}
