import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from '../shared/users.service';
import { CounterService } from '../shared/counter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {

  public inactiveActive = 0;
  @Input() users: string[];

  constructor(
    private usersService: UsersService,
    private counterService: CounterService) { };

  public ngOnInit() {
    this.counterService.update_active.subscribe(number => this.inactiveActive = number);
  }

  onSetToActive(id: number) {
    this.usersService.addToActive(id);
  }

}
