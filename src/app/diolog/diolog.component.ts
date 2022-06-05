import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diolog',
  templateUrl: './diolog.component.html',
  styleUrls: ['./diolog.component.scss']
})
export class DiologComponent implements OnInit {

  frashnesslist = ['Brand New', 'Second hand','Referbased'] 
  constructor() { }

  ngOnInit(): void {
  }

}
