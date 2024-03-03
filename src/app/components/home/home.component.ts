import { Component, OnInit } from '@angular/core';
import { GlobalfuncsService } from 'src/app/service/globalfuncs.service';

@Component({
  selector: 'fin-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public global: GlobalfuncsService) { }

  ngOnInit(): void {
  }

}
