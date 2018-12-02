import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class CounterService {
    
    public activeInactive = 0;
    public inactiveActive = 0;

    public update_active = new EventEmitter<number>();
    public update_inactive = new EventEmitter<number>();

    public addActiveInactive() {
        this.activeInactive++;
        this.update_inactive.emit(this.activeInactive);
    }

    public addInactiveActive() {
        this.inactiveActive++;
        this.update_active.emit(this.inactiveActive);
    }

}