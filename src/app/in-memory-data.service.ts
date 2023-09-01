import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const movies = [
      {id: 1, name: 'Drive', description:"A mysterious Hollywood action film stuntman gets in trouble with gangsters when he tries to help his neighbor's husband rob a pawn shop while serving as his getaway driver.",imageUrl:"drive.jpg"},
      {id: 2, name: 'Atonement', description:"Thirteen-year-old fledgling writer Briony Tallis irrevocably changes the course of several lives when she accuses her older sister's lover of a crime he did not commit.",imageUrl:"atonement.jpg"},
      {id: 3, name: 'Leon', description:"12-year-old Mathilda is reluctantly taken in by Léon, a professional assassin, after her family is murdered. An unusual relationship forms as she becomes his protégée and learns the assassin's trade. Léon (Reno) lives a lonely life in New York, working as a professional hitman for the mob.",imageUrl:"leon.jpg"},
      {id: 4, name: 'Fight Club', description:"An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",imageUrl:"fightclub.jpg"},
      {id: 5, name: 'Top Gun', description:"As students at the United States Navy's elite fighter weapons school compete to be best in the class, one daring young pilot learns a few things from a civilian instructor that are not taught in the classroom.",imageUrl:"topgun.jpg"},
      {id: 6, name: 'Blade Runner 2049', description:"Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years.",imageUrl:"bladerunner.jpg"},
      {id: 7, name: 'Into the Wild', description:"After graduating from Emory University, top student and athlete Christopher McCandless abandons his possessions, gives his entire $24,000 savings account to charity and hitchhikes to Alaska to live in the wilderness. Along the way, Christopher encounters a series of characters that shape his life.",imageUrl:"intothewild.jpg"},
      {id: 8, name: 'Inglourious Basterds', description:"In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.",imageUrl:"inglouriousbasterds.jpg"},
      {id: 9, name: 'Fury', description:"A grizzled tank commander makes tough decisions as he and his crew fight their way across Germany in April, 1945.",imageUrl:"fury.jpg"},
      
    ];
    return { movies };
  }
  constructor() { }
}
