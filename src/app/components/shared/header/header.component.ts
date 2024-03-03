import { Component, OnInit } from '@angular/core';
import { GlobalfuncsService } from 'src/app/service/globalfuncs.service';

@Component({
  selector: 'fin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  signedIn: boolean = false;

  constructor(public global: GlobalfuncsService) { }

  ngOnInit(): void {
  }

}
