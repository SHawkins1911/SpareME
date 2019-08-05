import { Injectable } from '@angular/core';
import { User } from "./user";
import { Style } from './style.enum';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  user = new User();
  statistics: any;

  constructor() { 
    this.user.ballSpeed = "17-20mph";
    this.user.bowlingBall = [
      "RotoGrip - Halo Pearl", "Hammer - Statement Solid", "DV8 - Pitbull", "Storm - Code Red"
    ];
    this.user.bowlingHand = "Right-Handed";
    this.user.bowlingStyle = Style.cranker;
    this.user.email = "hawkd215@gmail.com";
    this.user.expirationDateUsbc = "08/23/2019";
    this.user.expirationDateTnba = "08/30/2019";
    this.user.name = "Stefun Hawkins";
    this.user.usbc = "USBC  11-643318";
    this.user.tnba = "TNBA  089816"

  }

  getUserStats(): any {
    return this.statistics;
  }

  updateStats(statistics: any) {
    this.statistics = statistics;
  }

}
