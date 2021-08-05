import { Component, OnInit } from '@angular/core';
import { SearchService } from '../home-search/services/search.service';

@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.scss']
})
export class HomeMenuComponent implements OnInit {

  constructor(private searchService:SearchService) { }

  ngOnInit(): void {
  }

  buscar(){
    this.searchService.setSearh(true);
  }

}
