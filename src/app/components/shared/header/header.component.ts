import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  signedIn: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
