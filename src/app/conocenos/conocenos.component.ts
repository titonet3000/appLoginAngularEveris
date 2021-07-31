import { Component, OnInit } from '@angular/core';
import { UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PuedeDesactivar } from '../commons/guards/out.guard';

@Component({
  selector: 'app-conocenos',
  templateUrl: './conocenos.component.html',
  styleUrls: ['./conocenos.component.scss']
})
export class ConocenosComponent implements OnInit, PuedeDesactivar {

  constructor() { }


  ngOnInit(): void {
  }

  permitirSalidaDeRuta(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const confirmacion = window.confirm("¿Desear salir de la pagina, antes de guardar cambios?");
    return confirmacion;
  }

}
