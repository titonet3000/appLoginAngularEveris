import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';



export interface PuedeDesactivar {

  permitirSalidaDeRuta: () => Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
}



@Injectable({
  providedIn: 'root'
})
export class OutGuard implements CanDeactivate<unknown> {

  constructor(private router:Router){

  }
  
  
  canDeactivate(
    component: PuedeDesactivar,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return component.permitirSalidaDeRuta ? component.permitirSalidaDeRuta() : true;
  }
  
}
