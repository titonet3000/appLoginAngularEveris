import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChildGuard implements CanActivateChild {

  estado:boolean = false;
  constructor(private router:Router){

  }
  
  
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   

      this.estado = true;  
      console.log("RUTA: " + childRoute.routeConfig?.path);
      console.log("URL: " + state.url);
      console.log("INGRESO AL CanActivateChild");
      if (this.estado) {      
            // logged in so return true
            return true;
           }

    // not logged in so redirect to login page with the return url
    ///this.router.navigate(['/bienvenido']);
    return false;
  }
  
}
