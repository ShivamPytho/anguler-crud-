import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DiologComponent } from './diolog/diolog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'anguler-13crud';

  constructor(private dialog : MatDialog){

  }
  openDialog() {
    this.dialog.open(DiologComponent, {
      width:'30%'
    });
  }
}
