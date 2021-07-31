import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {
  username:string
  constructor() { }

  ngOnInit(): void {

    this.username=JSON.parse(sessionStorage.getItem("currentUser")).NOMBRE_EMP

  }

}
