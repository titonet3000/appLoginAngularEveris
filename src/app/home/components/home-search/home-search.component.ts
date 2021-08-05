import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { SearchService } from './services/search.service';

@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.scss']
})
export class HomeSearchComponent implements OnInit {

  showBuscar: boolean = false;
  search$:Observable<boolean>;
  searchSubscription:Subscription;
  
  constructor(private searchService:SearchService) { }

  ngOnInit(): void {

    this.search$ = this.searchService.getSearch$();
    this.searchSubscription = this.search$.subscribe(status => {
      this.showBuscar = status;
    });
  }

  ocultarPanelBuscar() {
    this.searchService.setSearh(false);
  }

  buscarHeroe(termino: string){

  }

}
