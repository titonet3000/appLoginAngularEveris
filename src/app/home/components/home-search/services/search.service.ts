import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private search$=  new Subject<boolean>();
  
  constructor() { }

  setSearh(show:boolean){
    this.search$.next(show);
  }

  getSearch$():Observable<boolean>{
    return this.search$.asObservable();
  }

}
