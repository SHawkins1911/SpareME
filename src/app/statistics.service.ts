import { Injectable } from '@angular/core';
import { League } from './league';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  leagues: League[];

  constructor() { 
    let league1 = new League();
    league1.name = "Friday Nite";
    league1.location = "Doverama - Dover, DE";
    league1.scores = [213, 197, 254,]
    
    let league2 = new League();
    league2.name = "Thursday Night Mixed";
    league2.location = "MidCounty Lanes - Middletown, DE";
    league2.scores = [205, 218, 264];

    let league3 = new League();
    league3.name = "Voshell Classic";
    league3.location = "Doverama - Dover, DE";
    league3.scores = [192, 196, 227];
    this.leagues = [
        league1,
        league2,
        league3
    ]

  }
}
