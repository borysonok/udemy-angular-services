import { Injectable } from "@angular/core";
import { CounterService } from './counter.service';

@Injectable()
export class UsersService {

    public activeUsers = ['Max', 'Anna'];
    public inactiveUsers = ['Chris', 'Manu'];

    public constructor(private counterService: CounterService) { }

    addToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.counterService.addActiveInactive();
    }

    addToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.counterService.addInactiveActive();
    }

}