import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadGuard implements CanLoad {

  constructor(private router:Router){

  }
  
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if (sessionStorage.getItem('currentUser')) {
        let nombre = JSON.parse(sessionStorage.getItem('currentUser')!);
        nombre = nombre.NOMBRE_EMP;
        if (sessionStorage.getItem(nombre)) {
            // logged in so return true
            return true;
        }
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login']);
    return false;

  }
}
